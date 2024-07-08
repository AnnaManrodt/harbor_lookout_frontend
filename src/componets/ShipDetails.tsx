import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    cargo: string;
    flagUrl: string;
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
                    <h2>{item.name}</h2>
                    <p>Size: {item.length} x {item.width}</p>
                            <p>Type: {item.shipType}</p>
                            <p>Year Built: {item.yearBuilt}</p>
                            <p>Draught: {item.draught}</p>
                            <p>Cargo: {item.cargo}</p>
                            <img src={item.flagUrl} className='flagType' alt='Flag'/>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ShipDetails;