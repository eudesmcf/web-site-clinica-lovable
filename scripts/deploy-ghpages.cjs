const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

const cacheRoot = path.resolve(__dirname, '..', '.cache');
const cacheDir = path.join(cacheRoot, 'gh-pages');

process.env.CACHE_DIR = cacheRoot;

if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true, force: true });
}

if (!fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
  console.error('dist folder not found. Run build first.');
  process.exit(1);
}

ghpages.publish('dist', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
