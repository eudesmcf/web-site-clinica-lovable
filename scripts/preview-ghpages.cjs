const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  // 1) build
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  // 2) prepare preview folder preview_root/<repo-name>/
  const repoName = 'movikids-website';
  // keep preview_root inside the project folder to avoid parent/cwd confusion
  const root = path.resolve(process.cwd(), 'preview_root');
  const target = path.join(root, repoName);

  // remove existing preview_root if any
  if (fs.existsSync(root)) {
    fs.rmSync(root, { recursive: true, force: true });
  }
  fs.mkdirSync(target, { recursive: true });

  // copy dist -> preview_root/<repoName>/
  const dist = path.resolve(process.cwd(), 'dist');
  if (!fs.existsSync(dist)) {
    console.error('dist folder not found. Build may have failed.');
    process.exit(1);
  }
  copyRecursiveSync(dist, target);

  // 3) serve the preview_root parent so the subpath /<repoName>/ resolves correctly
  console.log('Starting http-server for preview...');
  // use relative path 'preview_root' to avoid issues with spaces in absolute paths
  // find a free port by probing a small candidate range
  (async () => {
    const net = require('net');
    function isPortFree(port) {
      return new Promise((resolve) => {
        const tester = net.createConnection({ port, host: '127.0.0.1' });
        tester.setTimeout(300);
        tester.once('connect', () => {
          tester.destroy();
          resolve(false); // port is in use
        });
        tester.once('error', () => {
          resolve(true); // port free (connection refused)
        });
        tester.once('timeout', () => {
          tester.destroy();
          resolve(false);
        });
      });
    }

    let port;
    for (let p = 5173; p <= 5183; p++) {
      // eslint-disable-next-line no-await-in-loop
      const free = await isPortFree(p);
      if (free) { port = p; break; }
    }
    if (!port) port = 5173; // fallback

    const server = spawn('npx', ['http-server', 'preview_root', '-p', String(port)], { shell: true, stdio: 'inherit' });

    // open default browser to the correct subpath after short delay
    const previewUrl = 'http://localhost:' + port + '/' + repoName + '/';
    setTimeout(() => {
      try {
        if (process.platform === 'win32') {
          execSync('start "" "' + previewUrl + '"', { shell: true });
        } else if (process.platform === 'darwin') {
          execSync('open "' + previewUrl + '"');
        } else {
          execSync('xdg-open "' + previewUrl + '"');
        }
      } catch (e) {
        // ignore open errors
      }
    }, 1000);

    server.on('close', (code) => {
      process.exit(code);
    });
  })();
} catch (err) {
  console.error(err);
  process.exit(1);
}
