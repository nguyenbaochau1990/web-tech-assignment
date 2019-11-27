import React, { Component } from 'react'
import { loginEndpoint, client_id, redirect_uri, response_type } from '../constants'

class Login extends Component {

  render() {
    const URL = `${loginEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`
    return(
      <a href={URL}>
        <button>Login</button>
      </a>
    )
  }
}

export default Login