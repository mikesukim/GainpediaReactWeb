import React from 'react'
import './cultureBox.css'
import sampleImage from './images/sample.jpg'
import sampleImage1 from './images/sample1.jpg'


function CultureBox(props) {
    return (
        <div className="CultureBox">
            <img src={sampleImage} className="CultureBoxImg" alt="CultureBoxImg" />
            <div className="CultureBoxContainer">
                <div className="CultureBoxTitle" >Greeting, Michael.<br/> What's in your mind?</div>
                <div className="CultureBoxInfo">
                    <div className="CultureBoxDate" >CultureBox</div>
                    <img src = {sampleImage1} className="CultureBoxWriter" alt="CultureBoxWriterImg" />
                </div>
            </div>
        </div>
    );
    
}
export default CultureBox;