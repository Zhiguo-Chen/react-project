import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import './style.css';

const home = () => <div>this is home</div>;
// const about = (props) => {
//   console.log(props);
//   return <div>this is about</div>;
// };
class About extends Component {
  render() {
    console.log(this.props);
    return <div>this is about</div>;
  }
}
// const dashboard = () => <div>this is dashboard</div>;

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return <div>this is dashboard</div>;
  }
}

export default class RouterRoot extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about/abc">About</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
        {/* <Switch> */}
        <Route
          path="/about"
          render={(props) => <About {...props}></About>}
        ></Route>
        <Route
          path="/dashboard"
          children={(props) => <Dashboard {...props}></Dashboard>}
        ></Route>
        <Route path="/" component={home}></Route>
        {/* </Switch> */}
      </Router>
    );
  }
}
