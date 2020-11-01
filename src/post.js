import React from 'react'

import {
  Link,
} from "react-router-dom"

export default function Post(props){
  
    return(        
    
    <div className="grid-item">
    <div className="masonry-content text-center">
      <Link to="/blog"><img className="image mb-4" src={props.src} alt={props.alt} /></Link>
    <p className="masonry-description mb-3">{props.date}</p>
      <h1 className="masonry-title mb-3">{props.title}</h1>
      <Link className="readmore" to="/blog">Read More</Link>
    </div>
  </div>

  
  
  );
}