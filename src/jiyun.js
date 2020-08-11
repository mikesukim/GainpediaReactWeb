import React from 'react';
import useScript from './hooks/useScript';

export default function Jiyun(props){
    
    
    useScript("https://code.jquery.com/jquery-3.4.1.js");
    useScript("https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js");
    
    return (

        <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition" : true, "gutter":".gutter-sizer", "transitionDuration":"0.8s", "stagger": 30  }'>
        <div className="grid-sizer" />           
        <div className="gutter-sizer" />
        <div className="grid-item">
          <div className="masonry-content text-center">
            <a href="readmore.html"><img className="image mb-4" src="images/typewriter.JPG" alt="pic" /></a>
            <p className="masonry-description mb-3">Aug. 5. 2019</p>
            <h1 className="masonry-title mb-3">Jiyun and Michael's Daily Log</h1>
            <a className="readmore" href="readmore.html">Read More</a>
          </div>
        </div>
        <div className="grid-item">
          <div className="masonry-content text-center">
            <a href="readmore.html"><img className="image mb-4" src="images/menu.JPG" alt="pic2" /></a>
            <p className="masonry-description mb-3">Aug. 5. 2019</p>
            <h1 className="masonry-title mb-3">Our Daily Log</h1>
            <a className="readmore" href="readmore.html">Read More</a>
          </div>
        </div>
        <div className="grid-item">
          <div className="masonry-content text-center">
            <a href="readmore.html"><img className="image mb-4" src="images/jamjars.JPG" alt="pic2" /></a>
            <p className="masonry-description mb-3">Aug. 5. 2019</p>
            <h1 className="masonry-title mb-3">Our Daily Log</h1>
            <a className="readmore" href="readmore.html">Read More</a>
          </div>
        </div>    
        <div className="grid-item">
          <div className="masonry-content text-center">
            <a href="readmore.html"><img className="image mb-4" src="images/typewriter.JPG" alt="pic" /></a>
            <p className="masonry-description mb-3">Aug. 5. 2019</p>
            <h1 className="masonry-title mb-3">Our Daily Log</h1>
            <a className="readmore" href="readmore.html">Read More</a>
          </div>
        </div>    
      </div>


            
    );
    
}
  