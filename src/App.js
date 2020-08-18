import React from 'react';

//Import elements
import Clock from './clock';
import ReactHome from './reactHome';
import PostsGrid from './postsGrid'
import CultureBox from './cultureBox'
import ReadMore from './readMore'
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
        <Switch>
            <Route exact path="/">
              <MainHeader />
              <PostsGrid />
            </Route>
            <Route path="/blog">
              <MainHeader />
              <ReadMore />
            </Route>
            <Route path="/about">
              <MainHeader />
              <ReactHome />
              <CultureBox />
              <Clock />
            </Route>
        </Switch>
      </Router>
      </ApolloProvider>
    );
}

export default App;
