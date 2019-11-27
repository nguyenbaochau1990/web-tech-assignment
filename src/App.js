import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hashFragment, extractAccessToken, extractTokenType } from './util/fragmentURL';
import Login from './components/login';
import SearchArtist from './components/search_artist';


class App extends Component {
  constructor(){
    super();
    this.state = {
      access_token: '',
      token_type: '',
    }
  }

  componentDidMount() {
    const hash = window.location.hash
    if(hash){
      const hashResult = hashFragment(hash)
      const access_token = extractAccessToken(hashResult)
      const token_type = extractTokenType(hashResult)
      this.setState({
        access_token: access_token,
        token_type: token_type
      })
      this.resetUrl();
    }
  }

  resetUrl() {
    window.location.hash=''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.access_token ? 
            <SearchArtist
              access_token={this.state.access_token}
              token_type={this.state.token_type}
            /> 
            :
            <Login />
          }
        </header>
      </div>
    );
  }
}

export default App;