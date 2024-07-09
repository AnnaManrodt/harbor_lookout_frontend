import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styleSheets/shipdetails.css'
interface ShipDetailsProps {
    id: string;
}

interface Ship {
    id: number;
    name: string;
    length: number;
    width: number;
    shipType: string;
    yearBuilt: number;
    draught: number;
    flagUrl: string;
    shipImageUrl: string;
    country: string;
    imo: number;
    mmsi: number;
    schedule: {
        destinationDisplayName: string;
        departure: string;
        cargoType: string;
    },
    lastPosition: {
        lastUpdated: string;
        latitude: string;
        longitude: string;
        heading: string;
        speed: string;

    }
}

const ShipDetails: React.FC<ShipDetailsProps> = () => {
    const { id } = useParams<{ id: string }>(); // Extract id from URL params
    const [item, setItem] = useState<Ship | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/test-data/test-data.json');
                if (response.ok) {
                    const data = await response.json();
                    const selectedItem = data.find((item: Ship) => item.id.toString() === id);
                    setItem(selectedItem);
                } else {
                    console.error('Failed to fetch data. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {item ? (
                <div>
                    <section className='header'>
                        <h2>Ship {item.name}</h2>
                        <img src={item.flagUrl} className='flagType' alt='Flag' />
                        <img src={item.shipImageUrl} className='flagType' alt='Img of Ship' />
                    </section>
                    <h4>Transit Information </h4>
                    <p>Destination: {item.schedule.destinationDisplayName}</p>
                    <p>ETD {item.schedule.departure}</p>
                    <p>Last Report {item.lastPosition.lastUpdated}</p>
                    <p>Size: {item.length} x {item.width}</p>
                    <p>Lat/long {item.lastPosition.latitude}/{item.lastPosition.longitude}</p>
                    <p>Course/Speed {item.lastPosition.heading}°/{item.lastPosition.speed}kn</p>
                    <p>Distance idk what this is</p>
                    <p>Draught: {item.draught}</p>
                    <p>Status not sure</p>
                    <p>Cargo: {item.schedule.cargoType}</p>
                    <h4>Vessel Information</h4>
                    <p>Country {item.country}</p>
                    <p>Type {item.shipType}</p>
                    <p>Year Built {item.yearBuilt}</p>
                    <p>Year Built: {item.yearBuilt}</p>
                    <p>Size {item.length} x {item.width}</p>
                    <p>IMO {item.imo}</p>
                    <p>MMSI {item.mmsi}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ShipDetails;