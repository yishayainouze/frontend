import React, { useRef, useEffect, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { defaults as defaultInteractions } from 'ol/interaction';
import { fromLonLat } from 'ol/proj';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

interface Marker {
  position: [number, number];
  dialogText: string;
}

const IsraelMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [dialogText, setDialogText] = useState<string>('');

  const handleMarkerClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, text: string) => {
    setAnchorEl(event.currentTarget);
    setDialogText(text);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const markers: Marker[] = [
    { position: [34.7806, 32.0809], dialogText: 'Tel Aviv electrical store' },
    { position: [35.2137, 31.7683], dialogText: 'Jerusalem electrical store' },
    { position: [34.9888, 31.7496], dialogText: 'Beit Shemesh electrical store' },
    { position: [34.9896, 32.7940], dialogText: 'Haifa electrical store' },
    { position: [34.9358, 30.9871], dialogText: 'Yeruham electrical store' },
    { position: [34.6452, 31.8044], dialogText: 'Ashdod electrical store' },
    { position: [34.7933, 31.2518], dialogText: 'Beer Sheva electrical store' },

    { position: [ 2.3522,48.8566], dialogText: 'Paris, France' },
  { position: [ -0.1278,51.5074], dialogText: 'London, United Kingdom' },
  { position: [ 12.4964,41.9028], dialogText: 'Rome, Italy' },
  { position: [13.4050,52.5200], dialogText: 'Berlin, Germany' },
  { position: [-9.1393, 38.7223 ], dialogText: 'Lisbon, Portugal' },
  { position: [ -3.7038,40.4168], dialogText: 'Madrid, Spain' },
  { position: [ 4.9041,52.3676], dialogText: 'Amsterdam, Netherlands' },
  { position: [4.3517,50.8503 ], dialogText: 'Brussels, Belgium' },
  { position: [9.1900,45.4642], dialogText: 'Milan, Italy' }, 
  { position: [ 2.3522,48.8566], dialogText: 'Prague, Czech Republic' },
  
  // US
  { position: [ -77.0369,38.9072], dialogText: 'Washington, D.C., USA'},
  { position: [ -74.0060,40.7128], dialogText: 'New York, USA'},
  { position: [ -87.6298,41.8781], dialogText: 'Chicago, USA'},
  { position: [ -112.0740,33.4484], dialogText: 'Phoenix, USA'},
  { position: [ -95.3698,29.7604], dialogText: 'Houston, USA'},
  { position: [ -84.3880,33.7490], dialogText: 'Atlanta, USA'},
  { position: [ -82.9988,39.9612], dialogText: 'Columbus, USA'},
  
  ];

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
      overlays: [
        new Overlay({}),
      ],
      controls: [], // Empty array to remove all default controls
      interactions: defaultInteractions().extend([]),
    });

    markers.forEach((marker) => {
      const overlay = new Overlay({
        position: fromLonLat(marker.position),
        element: createMarkerElement(),
      });

      map.addOverlay(overlay);

      overlay.getElement()?.addEventListener('click', (event: any) => {
        return handleMarkerClick(event, marker.dialogText);
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
    <div ref={mapRef} style={{ width: '100%', height: '600px' }}>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>{dialogText}</Typography>
      </Popover>
    </div>
  );
};

export default IsraelMap;
