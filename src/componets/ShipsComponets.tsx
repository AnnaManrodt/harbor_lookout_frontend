import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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

const Ships: React.FC = () => {
    const [data, setData] = useState<Ship[]>([]);

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
    }, []);

    return (
        <>
            <div>
                <p>Title of a ship</p>
                <div className='shipInfo'>
                    {data.map((rec: Ship, i: number) => (
                        <div key={i}>
                            <NavLink to={`/ships/${rec.id}`}>
                                <h2>{rec.name}</h2>
                            </NavLink>
                            <p>Size: {rec.length} x {rec.width}</p>
                            <p>Type: {rec.shipType}</p>
                            <p>Year Built: {rec.yearBuilt}</p>
                            <p>Draught: {rec.draught}</p>
                            <p>Cargo: {rec.cargo}</p>
                            <img src={rec.flagUrl} className='flagType' alt='Flag'/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Ships;