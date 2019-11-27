import React from 'react'
import ArtistDetail from './artist_detail'

const ArtistList = (props) => {
  const artistItems = props.artists.map((artist) => {
    return <ArtistDetail key={artist.id} artist={artist} />
  })

  return(
    <ul>
      {artistItems}
    </ul>
  )
}

export default ArtistList