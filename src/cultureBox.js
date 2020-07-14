import React from 'react'
import './cultureBox.css'
import sampleImage from './images/sample.jpg'


function CultureBox(props) {
    return (
        <div className="CultureBox">
        <img src={sampleImage} className="CultureBoxImg" alt="CultureBoxImg" />
        <h1>CultureBox</h1>
        </div>
    );
    
}
export default CultureBox;