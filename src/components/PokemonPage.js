import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      allPokemon: [],
      filteredPokemon: [],
      searchName: "",
      newPokemon: {
        name: "",
        hp: "",
        sprites: {
          front: "",
          back: "",
        }
      }
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allPokemon: data
    })
    })
  }

  addPokemon = (e) => {
    // controlled form
    e.preventDefault()
    console.log(e.target.name)
    let newPokemon = {}
    if(e.target.name === "frontUrl"){
      newPokemon = {
        ...this.state.newPokemon,
        sprites: {
          ...this.state.newPokemon.sprites,
          front: e.target.value
        }
      }
    } else if(e.target.name === "backUrl"){
      newPokemon = {
        ...this.state.newPokemon,
        sprites: {
          ...this.state.newPokemon.sprites,
          back: e.target.value
        }
      }
    } else {
      newPokemon = {
        ...this.state.newPokemon,
        [e.target.name]: e.target.value
      }
    }
    this.setState({
      newPokemon
    })
  }


  submitPokemon = (e) => {
    // for the submit and post request
    e.preventDefault()

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state.newPokemon)
    })
    .then(res=>res.json())
    .then(data => {
      this.setState({
        allPokemon: [...this.state.allPokemon, data]
      })
    })
  }

  findPokemon = (search) => {
    let filteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.startsWith(search))
    this.setState({filteredPokemon})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitPokemon={this.submitPokemon} addPokemon={this.addPokemon}/>
        <br />
        <Search findPokemon={this.findPokemon}/>
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon} filteredPokemon={this.state.filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
