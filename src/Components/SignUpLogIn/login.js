import React, { Component } from 'react'
import '../../Styles/SignUpLogIn/SignUpLogIn.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
  this.state = {
    email:'',
    password:'',
    emailError:'',
    passwordError:''
  };
  this.handPassword = this.handPassword.bind(this);
}
 
  handleEmailInput = e =>{
    this.setState({email:e.target.value});
  }
  handlePasswordInput = e =>{
    this.setState({password: e.target.value});
  }
  handPassword(event) {
    const value = event.target.value;
    if ( value.length > 8) {
      this.setState({ passwordError: 'The last name should not exceed 8 characters.' });
    } 
    if (value.length <= 8) {
      this.setState({ password: value, passwordError: '' });
    }
  }
  // handPassword(event) {
  //   const value = event.target.value;
  //   if ( value.length > 8) {
  //     this.setState({ passwordError: 'The Password should not exceed 8 characters.' });
  //   } 
  //   if (value.length <= 8) {
  //     this.setState({ password: value, passwordError: '' });
  //   }
  // }

  handleEmailChange = (event) => {
    // const showemail = ''
    const email = event.target.value;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailRegex.test(email)) {
      this.setState({
        emailError: "Invalid Email [example@example.com]",
        email: email,
        showemail : 'ShowError'
      });
      if(email.length==0){
        this.setState({emailError:''})
        this.setState({showemail:''})
      } 
    }
 
    else {
     
      this.setState({
        emailError: "",
        showemail:'',
        email: email
      });
    }
  };
  render() {
    return (
      <form>
        <div className='sign'>
        <h3><b>Login</b></h3>
        </div>
        <div className="mb-1">
        <ion-icon name="mail"></ion-icon>
        &nbsp;
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            onChange={this.handleEmailInput && this.handleEmailChange}
            value={this.state.email}
          />
          <div className='error'>{this.state.emailError}</div>
        </div>
        <div className="mb-2">
        <ion-icon name="lock-closed"></ion-icon>
        &nbsp;
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            onChange={this.handlePasswordInput && this.handPassword }
            value={this.state.password}
          />
          {/* <div className='error'>{this.state.passwordError}</div> */}
        </div>
        <div className="d-grid">
          <button  type="submit"  disabled={!this.state.email || !this.state.password || this.state.emailError}>
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/forget">Password?</a>
        </p>
        <p className="forgot-password text-right">
          Dont have an account ? <a href="/sign-up">  Sign up</a>
        </p>
      </form>
    )
  }
}