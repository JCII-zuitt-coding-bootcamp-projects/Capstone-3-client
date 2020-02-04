import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';

import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import { ApolloProvider } from "react-apollo"
import  ApolloClient  from "apollo-boost"


//import components
import NavbarContainer from './components/NavbarContainer'
import Landing from './components/Landing'
import Login from './components/Login'



const client = new ApolloClient({
  uri : "http://localhost:4000/capstone3-gql" // this must be in the Env file or folder.....
})


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Container >
          <NavbarContainer  />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            {/*<Route path="/member/update/:id" component={UpdateMember} />*/}
          </Switch>

        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
