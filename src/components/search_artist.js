import React, { Component } from 'react'
import SearchInput from './search_input'
import ArtistList from './artist_list'
import axios from 'axios'
import { searchArtistEndpoint, artist } from '../constants'
import { withRouter } from 'react-router-dom'

class SearchArtist extends Component {
  constructor(){
    super()
    this.state={artists: []}
  }

  search(query) {
    if(query){
      const {access_token, token_type} = this.props
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token_type + ' ' + access_token
      }
      const URL = `${searchArtistEndpoint}?q=${query}&type=${artist}`
      axios.get(URL, {
        headers: headers
      })
      .then((response) => {
        this.setState({artists: response.data.artists.items})
      })
    }
  }

  render() {
    return(
      <div>
        <SearchInput onChange={query => this.search(query)}/>
        <ArtistList artists={this.state.artists}/>
      </div>
    )
  }
}

export default withRouter(SearchArtist)