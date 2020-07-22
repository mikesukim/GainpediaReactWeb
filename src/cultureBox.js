import React from 'react'
import './cultureBox.css'
import sampleImage from './images/sample.jpg'
import sampleImage1 from './images/sample1.jpg'

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const LATESTPOST = gql`
    {
        posts {
            title
            subtitle
            titleImgUrl
            author
            authorImgUrl
        }
      }
    `;



function CultureBox(props) {
    const { loading, error, data } = useQuery(LATESTPOST);
      
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return data.posts.map(({ titleImgUrl, authorImgUrl }) => (

        <div className="CultureBox">
            <img src={titleImgUrl} className="CultureBoxImg" alt={titleImgUrl} />
            <div className="CultureBoxContainer">
                <div className="CultureBoxTitle" >Greeting, Michael.<br/> What's in your mind?</div>
                <div className="CultureBoxInfo">
                    <div className="CultureBoxDate" >CultureBox</div>
                    <img src = {authorImgUrl} className="CultureBoxWriter" alt={authorImgUrl} />
                </div>
            </div>
        </div>
    ));
    
}
export default CultureBox;