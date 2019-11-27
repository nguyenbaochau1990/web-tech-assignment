import React, { Component } from 'react'
import './style.css'
import { Redirect } from 'react-router-dom'

class ArtistDetail extends Component {
  state={
    redirect: false
  }

  render(){
    const artist = this.props.artist
    if(this.state.redirect){
      return (
        <Redirect 
          to={{
            pathname:'/albums',
            state: {artist: artist}
          }} 
        />
      )
    }

    return (

        <td onClick={() => this.setState({redirect: true})}>
          <div>{artist.images.length>0 && <img src={artist.images[0].url} alt={artist.name}/>}</div>
          <div>{artist.name}</div>
          <div>{artist.followers.total} followers</div>
        </td>

    )
  }
}

export default ArtistDetail