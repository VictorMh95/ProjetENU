import React from 'react';

import  './login.css'
// eslint-disable-next-line
import {Link} from 'react-router-dom';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',    
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(e) {
   alert(this.state.username)
    }

    render() {
        const { username, password, submitted } = this.state;
        return(
<div className="login-page">
  <div className="form">
    <form className="login-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/>
        {/*submitted && !username &&
        <div className="help-block">Username is required</div>
        */}
        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        {/*submitted && !password && 
        <div className="help-block">Password is required</div>
        */}
        <button>login</button>
        <p className="message">Not registered? </p>
    </form>
  </div>
</div>
  );
    }
}

export default LoginPage;











