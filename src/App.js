import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import elements
import Clock from './clock';
import Togglebtn, {Yolo} from './togglebtn'; //Togglebtn is a default importing class. If it's not, it needs {}
import Books from './books'
import CultureBox from './cultureBox'
import PostsGrid from './postsGrid'
import MainHeader from './mainHeader'

//Import Server related Libraries
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//Import React-Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Connection to server
const client = new ApolloClient({
  // uri: 'http://gainpedia.dreamhosters.com/graphql',
  uri: 'http://localhost:4000/graphql',
});



function App() {

    //Render App
    return (
      <ApolloProvider client={client}>
      <Router>

        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cultureBox">CultureBox</Link>
              </li>
              <li>
                <Link to="/clock">Clock</Link>
              </li>
              <li>
                <Link to="/postsGrid">Main</Link>
              </li>
            </ul>
          </nav>

          <Switch>
          <Route path="/postsGrid">
            <MainHeader />
            <PostsGrid />
          </Route>
          <Route path="/cultureBox">
            <CultureBox />
          </Route>
          <Route path="/clock">
            <Clock />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        </div>

      </Router>
      </ApolloProvider>
    );

  
}

function Home() {
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



export default App;
