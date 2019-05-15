import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main"; 
import Register from "./register/register"; 
import HomePage from "./home/home"; 
import LoginPage from "./login/login"; 


import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
  <div>
    <Route path='/' component={Main} />
    <Route path='/register' component={Register} />
    <Route path='/HomePage' component={HomePage} />
    <Route path='/login' component={LoginPage} />

  </div>
</Router>
  ,document.getElementById("root")
);
