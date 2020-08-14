import React from 'react';
import useScript from './hooks/useScript';

//Import element
import Post from './post';


export default function PostsGrid(props){
    
    // Import Scripts
    // useScript("https://code.jquery.com/jquery-3.4.1.js");
    // useScript("https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js");
    useScript("js/jquery-3.5.1.min.js");
    useScript("js/masonry.pkgd.min.js");
    

    // Render
    return (
        <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition" : true, "gutter":".gutter-sizer", "transitionDuration":"0.8s", "stagger": 30  }'>
        <div className="grid-sizer" />           
        <div className="gutter-sizer" />
          <Post src = "images/typewriter.JPG" alt = "typewriter" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/menu.JPG" alt = "menu" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/jamjars.JPG" alt = "jamjars" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/mamacarmen.JPG" alt = "mamacarmen" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/IMG_0693.JPG" alt = "IMG_0693" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/pool.JPG" alt = "pool" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/sample.JPG" alt = "sample" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/sample1.JPG" alt = "sample1" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/fireworks.JPG" alt = "fireworks" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/cat.JPG" alt = "cat" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
          <Post src = "images/sample3.JPG" alt = "sample3" title = "Jiyun and Michael's Daily Log" date = "Aug. 5. 2019"/>
        </div>
     
    );
    
}
  