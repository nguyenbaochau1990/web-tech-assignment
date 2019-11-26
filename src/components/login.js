import React, { Component } from 'react'
import { loginEndpoint, client_id, redirect_uri, response_type } from '../constants'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      access_token: '',
      token_type: '',
    }
  }

  render() {
    const URL = `${loginEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`
    return(
      <a
        className='btn btn--loginApp-link'
        href={URL}
      >
        click here
      </a>
    )
  }
}

export default Login