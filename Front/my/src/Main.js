import React from "react";
import  LoginPage from "./login/login";
import RegisterPage from "./register/register"


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin:true
    };
}

isLogged = (dataFromLogin) => {
 // this.setState({JwtToken:dataFromLogin})
}

  render() {
    let isLoggedin = this.state.isLoggedin;
    let login;

    if (isLoggedin === false){
      login = <RegisterPage/>
    }else{
      login= <LoginPage isLogged={this.isLogged}/>
    }

    
    return (
  login    
);
  }
}
 
export default Main;