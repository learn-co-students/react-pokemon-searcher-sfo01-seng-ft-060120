import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()

    this.state = {
      clicked: false
    }
  }

  handleClick = (e) => {
    let clicked = !this.state.clicked
    this.setState({
      clicked
    })
  }

  render() {
    let {name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div onClick={(e) => {this.handleClick(e)}}>
          <div className="image">
            {this.state.clicked ? <img src={sprites.back} alt="oh no!" /> : <img src={sprites.front} alt="oh no!" />}
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
