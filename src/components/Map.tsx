import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-46.6333, -23.5505], // São Paulo coordinates
      zoom: 15,
    });

    // Add marker for clinic location
    new mapboxgl.Marker({
      color: '#3b82f6'
    })
    .setLngLat([-46.6333, -23.5505])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h3>Clínica Infantil</h3><p>Rua das Flores, 123 - São Paulo, SP</p>')
    )
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setShowTokenInput(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-96">
      {showTokenInput ? (
        <Card className="h-full flex items-center justify-center">
          <CardContent className="text-center space-y-4">
            <CardHeader>
              <CardTitle>Configurar Mapa</CardTitle>
            </CardHeader>
            <p className="text-muted-foreground">
              Para visualizar o mapa, insira seu token público do Mapbox
            </p>
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Token público do Mapbox"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="max-w-md"
              />
              <Button type="submit" disabled={!mapboxToken.trim()}>
                Carregar Mapa
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Obtenha seu token em{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </CardContent>
        </Card>
      ) : (
        <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
      )}
    </div>
  );
};

export default Map;