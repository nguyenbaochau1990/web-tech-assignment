import React from 'react'
import ArtistDetail from './artist_detail'

const ArtistList = (props) => {
  const artistItems = props.artists.map((artist) => {
    return (
      <tr key={artist.id}>
        <ArtistDetail artist={artist} />
      </tr>
    )
  })

  return(
    <table>
      <thead>
        {artistItems}
      </thead>
    </table>
  )
}

export default ArtistList