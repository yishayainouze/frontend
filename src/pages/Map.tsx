import React, { useRef, useEffect, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { defaults as defaultInteractions } from 'ol/interaction';
import { fromLonLat } from 'ol/proj';

const IsraelMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [dialogText, setDialogText] = useState<string>('');

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM({
            attributions: [], // Empty array to remove attributions
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([34.8516, 31.0461]),
        zoom: 7.5,
      }),
      interactions: defaultInteractions().extend([]),
    });

    const markers = [
      { position: fromLonLat([34.7806, 32.0809]), text: 'Tel Aviv electrical store' },
      { position: fromLonLat([35.2137, 31.7683]), text: 'Jerusalem electrical store' },
      { position: fromLonLat([34.9888, 31.7496]), text: 'Beit Shemesh electrical store' },
      { position: fromLonLat([34.9896, 32.7940]), text: 'Haifa electrical store' },
      { position: fromLonLat([34.9358, 30.9871]), text: 'Yeruham electrical store' },
      { position: fromLonLat([34.6452, 31.8044]), text: 'Ashdod electrical store' },
      { position: fromLonLat([34.7933, 31.2518]), text: 'Beer Sheva electrical store' },
    ];

    markers.forEach(({ position, text }) => {
      const marker = new Overlay({
        position,
        element: createMarkerElement(),
      });

      map.addOverlay(marker);

      marker.getElement()?.addEventListener('click', () => {
        setDialogText(text);
      });
    });

    return () => {
      map.setTarget('');
    };
  }, []);

  const createMarkerElement = () => {
    const markerElement = document.createElement('div');
    markerElement.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/256/2981/2981011.png" alt="Marker" width="32" height="32" />';
    markerElement.style.position = 'relative';
    markerElement.style.left = '-16px';
    markerElement.style.top = '-32px';
    return markerElement;
  };

  return (
    <div ref={mapRef} style={{ width: '590px', height: '400px' }}>
      <div style={{ position: 'absolute', top: '10px', left: '300px', margin: '8px', backgroundColor: 'white', padding: '8px', border: '1px solid black', borderRadius: '4px', display: dialogText ? 'block' : 'none' }}>
        <p>{dialogText}</p>
      </div>
    </div>
  );
};

export default IsraelMap;
