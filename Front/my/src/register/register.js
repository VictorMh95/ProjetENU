import React from 'react';

//import  './register.css'


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    

    render() {
        return(
<div className="login-page">
    <div className="form">
      <form className="register-form">
        <input type="text" placeholder="name"/>
        <input type="password" placeholder="password"/>
        <input type="text" placeholder="email address"/>
        <button>create</button>
        <p className="message">Already registered? </p> 
      </form>
    </div>
  </div>
  );
    }
}

export default RegisterPage;




