import React, { useEffect } from 'react';
import L from 'leaflet';

interface ShipsForMapProps {
    position: [number, number];
}

const ShipsForMap: React.FC<ShipsForMapProps> = ({ position }) => {
    useEffect(() => {
        const map = L.map('mapid');
        L.marker(position).addTo(map);
    }, [position]);

    return null; // CustomMarker component doesn't render anything directly
};
export default ShipsForMap;