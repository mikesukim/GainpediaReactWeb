import React, { Component } from 'react'

export default function Post(props){
    return(        
    <div className="grid-item">
    <div className="masonry-content text-center">
      <a href="readmore.html"><img className="image mb-4" src={props.src} alt={props.alt} /></a>
    <p className="masonry-description mb-3">{props.date}</p>
      <h1 className="masonry-title mb-3">{props.title}</h1>
      <a className="readmore" href="readmore.html">Read More</a>
    </div>
  </div>);
}