import React from 'react'

const Search = props => {
  return (
    <div className="ui search" onChange={(e) => props.findPokemon(e.target.value)}>
      <div className="ui icon input">
        <input className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
