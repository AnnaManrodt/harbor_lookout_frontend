import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

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
    const { id } = useParams();
    const [ship, setShip] = useState<Ship | null>(null);

    useEffect(() => {
        fetch('test-data/test-data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: Ship[]) => {
                const selectedShip = data.find(ship => ship.id === parseInt(id, 10));
                setShip(selectedShip || null);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }, [id]);

    if (!ship) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{ship.name}</h2>
            <p>Size: {ship.length} x {ship.width}</p>
            <p>Type: {ship.shipType}</p>
            <p>Year Built: {ship.yearBuilt}</p>
            <p>Draught: {ship.draught}</p>
            <p>Cargo: {ship.cargo}</p>
            <img src={ship.flagUrl} className='flagType' alt='Flag' />
        </div>
    );
};

export default ShipDetails;