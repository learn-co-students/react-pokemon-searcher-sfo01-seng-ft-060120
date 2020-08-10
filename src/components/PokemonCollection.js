import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  buildPokemon = () => {
    if(this.props.filteredPokemon.length === 0){
      return this.props.allPokemon.map((pokemon, idx) => {
          return <PokemonCard pokemon={pokemon} key={idx}/>
        })
    }else{
      return this.props.filteredPokemon.map((pokemon, idx) => {
        return <PokemonCard pokemon={pokemon} key={idx}/>
      })    }

  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.buildPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
