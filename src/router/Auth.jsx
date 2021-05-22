import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

const Home = () => <div>this is home</div>;
class About extends Component {
  render() {
    console.log(this.props);
    return <div>this is about</div>;
  }
}

const PrivateRoute = ({ children, ...rest }) => {
  return false ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to="/login"></Redirect>
  );
};

const Login = () => <div>Log in</div>;
export default class Auth extends Component {
  render() {
    return (
      <Router>
        <NavLink to="/home">home</NavLink> | &nbsp;
        <NavLink to="/about">about</NavLink> | &nbsp;
        <NavLink to="/protected">protected</NavLink>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/protected">
          <Login></Login>
        </PrivateRoute>
      </Router>
    );
  }
}
