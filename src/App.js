import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Navbar from './components/Shared/Navbar/Navbar';
import Transaction from './components/Transaction/Transaction/Transaction';
import Admin from './components/Admin/Admin/Admin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            {/* <Appointment></Appointment> */}
          </Route>
          <PrivateRoute path="/dashboard">
            <Navbar></Navbar>
            <Transaction></Transaction>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Navbar></Navbar>
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addDoctor">
            {/* <AddDoctor></AddDoctor> */}
          </Route>
          <Route path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;