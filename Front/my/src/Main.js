import React from "react";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import HomePage from"./components/home";
import Error from "./components/Error";

import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";


class Main extends React.Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route path='/' component={LoginPage} exact />
        <Route path='/register' component={RegisterPage} />
        <Route path='/HomePage' component={HomePage} />
        <Route component={Error} />
      </Switch>
    </Router>
    );
  }

}
 
export default Main;


