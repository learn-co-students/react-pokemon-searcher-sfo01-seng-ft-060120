import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    displayedPokemons: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(json => this.setState({
      pokemons: json,
      displayedPokemons: json
    }))
  }

  pokemonSearch = (e) => {
    let displayedPokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(e.target.value))
    this.setState({ displayedPokemons })
  }

  newPokemonForm = (e) => {
    e.preventDefault()
    let pokemons = [...this.state.pokemons]
    let displayedPokemons = [...this.state.pokemons]
    let {name, hp, frontUrl, backUrl} = e.target
    let newPokemon = {
      id: ((this.state.pokemons[this.state.pokemons.length - 1].id) + 1),
      name: name.value,
      hp: hp.value,
      sprites: {
        front: frontUrl.value,
        back: backUrl.value
      }}

      fetch('http://localhost:3000/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newPokemon)
      })
      .then(res => res.json())
      .then(json => this.setState({
        pokemons: [...pokemons, json],
        displayedPokemons: [...displayedPokemons, json]
      }))
      name.value = ""
      hp.value = ""
      frontUrl.value = ""
      backUrl.value = ""
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemonForm={this.newPokemonForm}/>
        <br />
        <Search pokemonSearch={this.pokemonSearch}/>
        <br />
        <PokemonCollection displayedPokemons={this.state.displayedPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
