import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    return (
      <Card.Group itemsPerRow={6} >
        {
          this.props.pokemon.map (pokemon => {
            return <PokemonCard pokemon={pokemon} />
          })
        }
        <h1>Hello From Pokemon Collection</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
