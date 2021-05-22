import React, { Component } from 'react';
import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

const home = () => <div>this is home</div>;
class About extends Component {
  render() {
    console.log(this.props);
    return <div>this is about</div>;
  }
}

export default class RedirectComponent extends Component {
  render() {
    return (
      <Router>
        <NavLink to="/abc">home</NavLink> | &nbsp;
        <NavLink to="/about">about</NavLink>
        <Route path="/home" component={home}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect from="/abc" to="/home"></Redirect>
      </Router>
    );
  }
}
