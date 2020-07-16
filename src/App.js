import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import Togglebtn, {Yolo} from './togglebtn'; //Togglebtn is a default importing class. If it's not, it needs {}
import Books from './books'
import CultureBox from './cultureBox'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://gainpedia.dreamhosters.com/graphql',
});


function App() {

    return (
      <div className="App">
        <ApolloProvider client={client}>
    
  
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
        <Clock />
        <Togglebtn />
        <Yolo />
        <Books name = "Michael"/>
        <CultureBox />
        


        </ApolloProvider>
      </div>
    );

  
}

export default App;
