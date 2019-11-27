import React, { Component } from 'react'
import { searchAlbumEndpoint } from '../constants'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ArstistAlbumDetail from './artist_album_detail'

class ArtistAlbumList extends Component {
  constructor(props){
    super(props)
    this.state={albums: []}
  }
  componentDidMount() {
    const selectedArtist = this.props.location.state.artist
    const artistId = selectedArtist && selectedArtist.id
    if(artistId) {
      const URL = `${searchAlbumEndpoint.replace('{id}', artistId)}`
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
          this.setState({albums: response.data.items})
        })
    }
  }

  render(){
    const albumItems = this.state.albums.map((album) => {
      return (
        <tr key={album.id}>
          <ArstistAlbumDetail album={album}/>
        </tr>
      )
    })

    return(
      <table>
        <thead>
          {albumItems}
        </thead>
      </table>
    )
  }
}

export default withRouter(ArtistAlbumList)