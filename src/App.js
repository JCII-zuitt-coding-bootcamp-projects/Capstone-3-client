import React , {useState} from 'react';
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
import Logout from './components/Logout'
import AccessDenied from './components/AccessDenied'


import Admins from './components/admin/Admins'
import CreateAdmin from './components/admin/CreateAdmin'
  import AddPerson from './components/people/AddPerson'
  import People from './components/people/People'
import RecentDetections from './components/monitor/RecentDetections'
import Watchlists from './components/monitor/Watchlists'

import LiveMonitoring from './components/live/LiveMonitoring'


import keys from './config/keys'


const client = new ApolloClient({
  uri : keys.apolloClientURI
})


function App() {


  const [auth, setAuth] = useState(localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null )


  

  const hasRole = (role)=>{
    if( auth == null || auth.roles == ''){
      return false
    }
    return auth.roles.includes(role)
  }

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Container >
          <NavbarContainer  auth={auth} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/Logout" component={Logout} />

            <Route exact path="/admins" component={ hasRole('view-admins') ? Admins : AccessDenied} />
            <Route path="/admins/create" component={ hasRole('add-admin') ? CreateAdmin : AccessDenied} />

            <Route exact path="/people" component={ hasRole('view-people') ? People : AccessDenied} />
            <Route path="/people/add" component={ hasRole('add-person') ? AddPerson : AccessDenied} />

            <Route path="/recent-detections" component={ hasRole('recent-detections') ? RecentDetections : AccessDenied} />
            <Route path="/watchlists" component={ hasRole('view-watchlists') ? Watchlists : AccessDenied} />


            <Route path="/live-monitoring" component={ hasRole('live-monitoring') ? LiveMonitoring : AccessDenied} />


            {/*<Route path="/member/update/:id" component={UpdateMember} />*/}
          </Switch>

        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
