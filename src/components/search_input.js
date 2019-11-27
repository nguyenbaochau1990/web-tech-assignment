import React, { Component } from 'react'
import { search_placeholder } from '../constants'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  // search-as-you-type
  handleEventChange (event) {
    this.setState({query: event.target.value})
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <input
        placeholder={search_placeholder}
        onChange={event => this.handleEventChange(event)}
      />
    )
  }
}

export default SearchInput