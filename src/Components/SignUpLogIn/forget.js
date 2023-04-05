import React, { Component } from 'react'
import '../../Styles/SignUpLogIn/SignUpLogIn.css'

export default class Forget extends Component{
  constructor(props) {
    super(props);
  this.state = {
    email:'',
  
    emailError:'',
    
  };
  // this.handPassword = this.handPassword.bind(this);
}
 
  handleEmailInput = e =>{
    this.setState({email:e.target.value});
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
        <div className='Forget'>
        <h3><b>Forget</b></h3>
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
        <div className="d-grid">
          <button  type="submit" disabled={!this.state.email || this.state.emailError}>
            Click
          </button>
        </div>
      </form>
    )
  }
}