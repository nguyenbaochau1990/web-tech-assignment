import React, { Component } from 'react'
import './style.css'

class ArstistAlbumDetail extends Component {

  renderListArtist = (artists) => {
    return(
      <ul>
      {artists.map((artist) => {
        return <li key={artist.id}>{artist.name}</li>
      })}
      </ul>
    )
  }

  render() {
    const album = this.props.album
    return(
      <td>
        <div>
          {album.images.length>0 && <img src={album.images[0].url} alt={album.name}/>}
          </div>
        <div>
          {album.name}
        </div>
        <div>
          {album.release_date}
        </div>
        <div>
          {album.total_tracks} tracks
        </div>
        <div>
          List artists:{this.renderListArtist(album.artists)}
        </div>
        <div>
          <a href={album.external_urls.spotify} target='_blank' rel='noopener noreferrer'>Preview on Spotify</a>
        </div>
      </td>
    )
  }
}

export default ArstistAlbumDetail