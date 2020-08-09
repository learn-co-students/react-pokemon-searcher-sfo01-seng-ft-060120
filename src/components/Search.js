import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input" onChange={props.pokemonSearch}>
        <input className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
