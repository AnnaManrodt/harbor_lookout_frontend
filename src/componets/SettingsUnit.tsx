import React, { useState } from 'react';
import '../App.css'
const UnitSettings: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleOptionClick = (option: number) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <h3>Display Unit Type</h3>
            <button
                className={selectedOption === 1 ? 'highlighted' : ''}
                onClick={() => handleOptionClick(1)}
            >
               Nautical
            </button>
            <button
                className={selectedOption === 2 ? 'highlighted' : ''}
                onClick={() => handleOptionClick(2)}
            >
                English
            </button>
            <button
                className={selectedOption === 3 ? 'highlighted' : ''}
                onClick={() => handleOptionClick(3)}
            >
                Metric
            </button>
        </div>
    );
};
export default UnitSettings;