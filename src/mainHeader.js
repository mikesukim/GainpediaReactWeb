import React,{useRef,useCallback} from 'react';
import useOutsideAlerter from "./hooks/useOutsideAlerter"

export default function MainHeader(props){

    const [isOpen,setIsOpen] = React.useState(false);
    const wrapperRef = useRef(null);
    
    useOutsideAlerter(wrapperRef, ()=>{setIsOpen(false)});

    return( 
        <header>  
            <div className="mx-auto headergrid" style={{display: 'grid'}}> 
            <div><a href="index.html" id="logo">GAINPEDIA</a>
            </div>
            <div className="nav">
                <a href="index.html" style={{marginRight: '10px'}}>Blog</a>
            </div>
            <div className="nav">     
                <a href="about.html">About</a>
            </div>     
            <div className={isOpen ? "menu change" : "menu"} id="menubar" onClick={() => setIsOpen(!isOpen)} ref={wrapperRef}>
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
                <div className={isOpen ? "dropdown-toggle show" : "dropdown-toggle"} id="myDropdown">
                <ul className="dropdown">
                    <li><a href="index.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="#">What Else</a></li>
                </ul>        
                </div>
            </div>     
            </div>      
        </header>
    );
}