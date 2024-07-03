import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function MapPage() {
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([46.7833, -92.1066], 12); // Set initial view
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current); // Add tile layer
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove(); // Clean up the map instance
                mapRef.current = null; // Reset mapRef after removing the map
            }
        };
    }, []);

    return (
        <>
            <h1>this is the Map Page</h1>
            <div id='map' style={{ height: '700px' }}></div>
        </>
    );
}