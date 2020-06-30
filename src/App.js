import React, { Component } from "react";
import logo from "./logo.svg";
import jStay from "./imgs/JStay-Logo.png";
import "./App.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Home";
import Tos from "./Tos";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h2>
              <NavLink to="/home"><img src= {jStay} alt="logo for J-Stay the letter J with a roof over it" /></NavLink>
            </h2>
            <nav>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
              </li>


            </nav>
          </header>

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/terms-of-service" component={Tos} />


            <Redirect from="/" to="/home" />
          </Switch>

          <footer>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-twitter-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-snapchat-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-github-square" />
                </a>
              </li>
            </ul>
            <p>

              <a href="www.google.com" target="_blank">
               <logo />
              </a>
            </p>

          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
