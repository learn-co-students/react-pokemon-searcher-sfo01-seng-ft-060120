import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    img_front: true
  }

  handleClick = () => {
    let img_front = !this.state.img_front
    this.setState({ img_front })
  }

  render() {
    let {name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.img_front ? sprites.front : sprites.back} alt="oh no!" />
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
