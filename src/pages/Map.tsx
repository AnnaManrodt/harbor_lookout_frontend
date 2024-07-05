import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import L, { Icon, LatLngExpression, Map, Marker } from 'leaflet';
import { IoCameraSharp } from "react-icons/io5";

export default function MapPage() {
    const mapRef = useRef<Map | null>(null);
    const myIcon: Icon = L.icon({
        iconUrl: 'https://img.icons8.com/?size=100&id=11741&format=png&color=000000',
        iconSize: [20, 20],
        iconAnchor: [22, 9],
        popupAnchor: [-8, -76],
        shadowSize: [60, 95],
        shadowAnchor: [22, 94]
    });

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([46.7533, -92.1066], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);

            const duluthBayfront: Marker = L.marker([46.7833, -92.1066], { icon: myIcon }).addTo(mapRef.current);
            duluthBayfront.on('click', function() {
                const popupContent = `
                    <div>
                    <h3>Duluth Bayfront Cam</h3>
                        <a href="https://www.youtube.com/watch?v=vqCD00PD5pk">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const duluthHillside: Marker = L.marker([46.7533, -92.0966], {icon: myIcon}).addTo(mapRef.current);
            duluthHillside.on('click', function() {
                const popupContent = `
                    <div>
                    <h3>Duluth Hillside Cam</h3>
                        <a href="https://www.youtube.com/watch?v=DzJb26edNjs">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const glAquarium: Marker = L.marker([46.7333, -92.1266], {icon: myIcon}).addTo(mapRef.current);
            glAquarium.on('click', function() {
                const popupContent = `
                    <div>
                    <h3>Great Lake Aquarium Cam</h3>
                        <a href="https://www.youtube.com/watch?v=T1Dm51TaWMY">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const aerialLiftBridge: Marker = L.marker([46.7433, -92.0866], {icon: myIcon}).addTo(mapRef.current);
            aerialLiftBridge.on('click', function() {
                const popupContent = `
                    <div>
                    <h3>Duluth Aerial Lift Bridge Cam</h3>
                        <a href="https://www.youtube.com/watch?v=BzwWjdZXymc">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const canal: Marker = L.marker([46.7733, -92.1166], {icon: myIcon}).addTo(mapRef.current);
            canal.on('click', function() {
                const popupContent = `
                    <div>
                    <h3>Duluth Canal Cam</h3>
                        <a href="https://www.youtube.com/watch?v=9k_sg8rhsgk">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const westernHarbor: Marker = L.marker([46.7233, -92.0766], {icon: myIcon}).addTo(mapRef.current);
            westernHarbor.on('click', function() {
                const popupContent = `
                    <div>
                    <h3>Duluth Western Harbor Cam</h3>
                        <a href="https://www.youtube.com/watch?v=kNyX6Wn6-4M">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const harbor: Marker = L.marker([46.7333, -92.1066], {icon: myIcon}).addTo(mapRef.current);
            harbor.on('click', function() {
                const popupContent = `
                    <div>
                    <h3>Duluth Harbor Cam</h3>
                        <a href="https://www.youtube.com/watch?v=05WivhRmKq4">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            

            
        }

        // Additional logic for creating markers and updating positions

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
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