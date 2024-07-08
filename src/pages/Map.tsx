import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import L, { Icon, LatLngExpression, Map, Marker } from 'leaflet';
import { IoCameraSharp } from "react-icons/io5";
import ShipsForMap from '../componets/ShipsForMap';

export default function MapPage() {
    const mapRef = useRef<Map | null>(null);
    const [data, setData] = useState<Ship[]>([]);
    const myIcon: Icon = L.icon({
        iconUrl: 'https://img.icons8.com/?size=100&id=11741&format=png&color=000000',
        iconSize: [20, 20],
        iconAnchor: [22, 9],
        popupAnchor: [-8, -76],
        shadowSize: [60, 95],
        shadowAnchor: [22, 94]
    });


    interface Ship {
        id: number;
        name: string;
        lastPosition: {
            latitude: number;
            longitude: number;
        }
        }


    const customMarkers = [
        { position: [46.7033, -92.1766] },
        { position: [46.8, -92.2] },
        // Add more custom markers with different positions and icon URLs as needed
    ];

    useEffect(() => {


        fetch('test-data/test-data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data: Ship[]) => {
            console.log(data);
            setData(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });

        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([46.7533, -92.1066], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);

            data.forEach(ship => {
                const position: LatLngExpression = [ship.lastPosition.latitude, ship.lastPosition.longitude];
                const customIcon = L.icon({
                    iconUrl: 'https://img.icons8.com/?size=100&id=24194&format=png&color=000000',
                    iconSize: [30, 25],
                });
                L.marker(position, { icon: customIcon }).addTo(mapRef.current);
            });


            const duluthBayfront: Marker = L.marker([46.7833, -92.1066], { icon: myIcon }).addTo(mapRef.current);
            duluthBayfront.on('click', function () {
                const popupContent = `
                    <div>
                    <h3>Duluth Bayfront Cam</h3>
                        <a href="https://www.youtube.com/watch?v=vqCD00PD5pk" onclick="window.open(this.href); return false;">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image" class="camImg">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const duluthHillside: Marker = L.marker([46.7533, -92.0966], { icon: myIcon }).addTo(mapRef.current);
            duluthHillside.on('click', function () {
                const popupContent = `
                    <div>
                    <h3>Duluth Hillside Cam</h3>
                        <a href="https://www.youtube.com/watch?v=DzJb26edNjs" onclick="window.open(this.href); return false;">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image" class="camImg">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const glAquarium: Marker = L.marker([46.7333, -92.1266], { icon: myIcon }).addTo(mapRef.current);
            glAquarium.on('click', function () {
                const popupContent = `
                    <div>
                    <h3>Great Lake Aquarium Cam</h3>
                        <a href="https://www.youtube.com/watch?v=T1Dm51TaWMY" onclick="window.open(this.href); return false;">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image" class="camImg">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const aerialLiftBridge: Marker = L.marker([46.7433, -92.0866], { icon: myIcon }).addTo(mapRef.current);
            aerialLiftBridge.on('click', function () {
                const popupContent = `
                    <div>
                    <h3>Duluth Aerial Lift Bridge Cam</h3>
                        <a href="https://www.youtube.com/watch?v=BzwWjdZXymc" onclick="window.open(this.href); return false;">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image" class="camImg">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const canal: Marker = L.marker([46.7733, -92.1166], { icon: myIcon }).addTo(mapRef.current);
            canal.on('click', function () {
                const popupContent = `
                    <div>
                    <h3>Duluth Canal Cam</h3>
                        <a href="https://www.youtube.com/watch?v=9k_sg8rhsgk" onclick="window.open(this.href); return false;">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image" class="camImg">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const westernHarbor: Marker = L.marker([46.7233, -92.0766], { icon: myIcon }).addTo(mapRef.current);
            westernHarbor.on('click', function () {
                const popupContent = `
                    <div>
                    <h3>Duluth Western Harbor Cam</h3>
                        <a href="https://www.youtube.com/watch?v=kNyX6Wn6-4M" onclick="window.open(this.href); return false;">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image" class="camImg">
                    </div>
                `;
                this.bindPopup(popupContent).openPopup();
            });

            const harbor: Marker = L.marker([46.7333, -92.1066], { icon: myIcon }).addTo(mapRef.current);
            harbor.on('click', function () {
                const popupContent = `
                    <div>
                    <h3>Duluth Harbor Cam</h3>
                        <a href="https://www.youtube.com/watch?v=05WivhRmKq4" onclick="window.open(this.href); return false;">Click to view live camera</a>
                        <img src="https://picsum.photos/200/300" alt="Image" class="camImg">
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
        {/* <p>{data[0].lastPosition.latitude}</p> */}
            <div id='map' style={{ height: '700px' }}></div>
        </>
    )
}