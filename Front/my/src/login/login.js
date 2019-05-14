import React from 'react';

import  './login.css'
// eslint-disable-next-line
import {Link} from 'react-router-dom';

const authUrl = "http://127.0.0.1:5000/auth";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',    
            password: '',
            submitted: false,
            token:''
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
      fetch(authUrl,
        {
          headers: {
            'Content-Type':'application/json'
          },
          method: "POST",
          body:JSON.stringify({username: this.state.username, password:this.state.password})
      }).then((response) => {
        return response.json();
      })
      .then((jsonObject) => {
        this.setState({token:jsonObject})
      })
      .catch((error) => {
        console.log(error)
      });

      this.props.isLogged(this.state.token);

    }

    render() {
        //const { username, password, submitted } = this.state;
        return(
<div>
  <div className="title-login">  
    <h2 >Welcome to transparence</h2>
  </div>
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
          <a className="message" href="/register">Not registered? </a>
      </form>
    </div>
  </div>
</div>
  );
    }
}

export default LoginPage;











