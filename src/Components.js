import React, { Component } from 'react'

export class Card extends Component {
  handleClick = () => {
    if (this.props.link) window.open(this.props.link, '_blank')
  }

  render() {
    return (
      <div class='card' onClick={this.handleClick}>
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
