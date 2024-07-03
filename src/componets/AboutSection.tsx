import React from 'react';

interface CustomComponentProps {
    title: string;
    paragraph: string;
    imageUrl: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ title, paragraph, imageUrl }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <img src={imageUrl} alt="Custom Image" />
        </div>
    );
};
export default CustomComponent;