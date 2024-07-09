import React from 'react';
import '../styleSheets/about.css'
//this file is a component that displays the info for the about page

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
            <img src={imageUrl} alt="Custom Image" className='aboutImgs' />
        </div>
    );
};
export default CustomComponent;
