import React from 'react';
import FormInput from '../form-input/form-input.componet';
import CustomButton from '../custom-button/custom-button.componet';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.component.style.scss';

class SignIn extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render () {
    return (
      <div className='sign-in'>
        <h1>Already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email'
            required/>
          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            label='password'
            required/>

          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn >Google sign in</CustomButton>
          </div>

        </form>
      </div>
    )
  }
}


export default SignIn