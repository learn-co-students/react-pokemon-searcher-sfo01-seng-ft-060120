import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()

    this.state = {
      pokemon: [],
      searchValue: ""
    }
  }

  componentDidMount = () => {
      fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(json => {
        this.setState({
          pokemon:json
        })
      })
  }

  searchForPokemon = (event) => {
    this.setState({
      searchValue: event.target.value
    })
    const filteredPokemon = this.state.pokemon.filter(pokemon =>
      pokemon.name.includes(this.state.searchValue)
    )
    this.setState({
      pokemon: filteredPokemon
    })
  }

  addNewPokemon = (event) => {
    let data = {
      name: event.target.name.value,
      hp: event.target.hp.value,
      sprites: {
        front: event.target.frontUrl.value,
        back: event.target.backUrl.value
      }
    }

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      let updatedPokemon = this.state.pokemon
      this.setState ({
        pokemon: [...updatedPokemon,json]
      })
    })

  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search searchForPokemon={this.searchForPokemon} searchValue={this.state.searchValue} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </Container>
    )
  }
}

export default PokemonPage
