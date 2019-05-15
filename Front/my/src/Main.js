import React from "react";
import LoginPage from "./login/login";
import RegisterPage from "./register/register";
import HomePage from"./home/home";

import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged:false
    };
}

  render() {
   /* let page;
    if(this.state.logged){
      page = <HomePage/>
    }else{
      page = <LoginPage/>
    }
    */
    return (
<div>Header</div>
    );
  }

}
 
export default Main;


