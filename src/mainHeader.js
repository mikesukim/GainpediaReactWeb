import React,{useRef} from 'react';

//Import Hooks
import useOutsideAlerter from "./hooks/useOutsideAlerter"

//Import React-Router
import {
    Link
  } from "react-router-dom";

export default function MainHeader(props){

    const [isOpen,setIsOpen] = React.useState(false);
    const wrapperRef = useRef(null);
    
    useOutsideAlerter(wrapperRef, ()=>{setIsOpen(false)});

    return(
        
        <header>  
            <div className="mx-auto headergrid" style={{display: 'grid'}}> 
            <div><Link to="/" id="logo">GAINPEDIA</Link>
            </div>
            <div className="nav">
                <Link to="/blog" style={{marginRight: '10px'}}>Blog</Link>   
            </div>
            <div className="nav">  
                <Link to="/about">About</Link>   
            </div>   
            <div className={isOpen ? "menu change" : "menu"} id="menubar" onClick={() => setIsOpen(!isOpen)} ref={wrapperRef}>
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
                <div className={isOpen ? "dropdown-toggle show" : "dropdown-toggle"} id="myDropdown">
                <ul className="dropdown">
                    <li><a href="index.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>        
                </div>
            </div>     
            </div>      
        </header>

    );
}