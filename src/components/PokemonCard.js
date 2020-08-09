import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props) {
    super()

    this.state = {
      currentImage: props.pokemon.sprites.front
    }
  }

  changeImage = () => {
    if (this.state.currentImage === this.props.pokemon.sprites.front) {
      this.setState ({
        currentImage: this.props.pokemon.sprites.back
      })
      } else {
        this.setState ({
          currentImage: this.props.pokemon.sprites.front
        })
      }
    }

  render() {
    let {id, name, hp} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.currentImage} alt="oh no!" onClick={this.changeImage}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
