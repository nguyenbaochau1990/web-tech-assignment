import React, { Component } from 'react'
import { searchAlbumEndpoint } from '../constants'
import axios from 'axios'

class ArtistAlbumList extends Component {
  constructor(props){
    super(props)
    this.state={qqc: ''}
  }
  componentDidMount() {
    const URL = `${searchAlbumEndpoint.replace('{id}', this.props.artist.id)}`
    const {access_token, token_type} = this.props
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token_type + ' ' + access_token
      }
      axios.get(URL, {
        headers: headers
      })
      .then((response) => {
        this.setState({artists: response.data.artists.items})
      })
  }
  render(){

    return(
      <div>
        Afficher album List
      </div>
    )
  }
}

export default ArtistAlbumList