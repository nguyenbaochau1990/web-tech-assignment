import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { hashFragment, extractAccessToken, extractTokenType } from '../../util/fragmentURL';
import Login from '../login';
import SearchArtist from '../search_artist';
import ArtistAlbumList from '../artist_album_list';


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
    }
    this.resetUrl();
  }

  resetUrl() {
    window.history.pushState("", document.title, window.location.pathname);
  }

  searchArtistWithProps = () => {
    return (
      <SearchArtist
        access_token={this.state.access_token}
        token_type={this.state.token_type}
      />
    )
  }

  artistAlbumListWithProps = () => {
    return(
      <ArtistAlbumList
        access_token={this.state.access_token}
        token_type={this.state.token_type}
      />
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/search' component={this.searchArtistWithProps} />
            <Route path='/albums' component={this.artistAlbumListWithProps} />
            <Route path='/' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;