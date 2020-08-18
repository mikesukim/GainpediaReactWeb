import React from 'react'

import './App.css';
import logo from './logo.svg'

//Import elements
import Togglebtn from './togglebtn'
import Yolo from './togglebtn'
import Books from './togglebtn'

export default function Home() {
    return (
  
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1> Hello, this is Michael and Welcome to my First ReactApp</h1>
      <Togglebtn />
      <Yolo />
      <Books name = "Michael"/>
    </div>
  
    );
  }