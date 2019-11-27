import React, { Component } from 'react'
import './style.css'

class ArtistDetail extends Component {
  handleOnClickArtist (artist) {
    console.log(artist)
  }

  render(){
    const artist = this.props.artist
    return (
      <li onClick={() => this.handleOnClickArtist(artist)}>
        <div>
          {artist.images.length>0 && <img src={artist.images[0].url} alt={artist.name}/>}
        </div>
        <div>
          {artist.name}
        </div>
        <div>
          {artist.followers.total} followers
        </div>
      </li>
    )
  }
}

export default ArtistDetail