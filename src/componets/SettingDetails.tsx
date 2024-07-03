import React, { useState } from 'react';
import '../styleSheets/App.css'


const DetailSettings: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleOptionClick = (option: number) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <h3>Ship List Details</h3>
            <button
                className={selectedOption === 1 ? 'highlighted' : ''}
                onClick={() => handleOptionClick(1)}
            >
                More
            </button>
            <button
                className={selectedOption === 2 ? 'highlighted' : ''}
                onClick={() => handleOptionClick(2)}
            >
               Less
            </button>
        </div>
    );
};
export default DetailSettings;