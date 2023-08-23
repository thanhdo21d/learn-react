

import React, { Component } from 'react'

export default class Header extends Component {
  menu = "menu"

  demo() {
    console.log("ok")
  }
  render() {
    const { name, price, desc } = this.props.product
    return (
      <div>
        <span>
          {name}
        </span>
        <span>
          {price}
        </span>
        <span>
          {this.demo()}
        </span>
      </div>
    )
  }
}
