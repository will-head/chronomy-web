import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  render () {
    return (
      <div className='form-container'>
        Sign Up
        <form>
        </form>
      </div>
    )
  }
}

export default SignUp;
