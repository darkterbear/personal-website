import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div class='card'>
        <h3>{this.props.title}</h3>
        {this.props.children}
      </div>
    )
  }
}
