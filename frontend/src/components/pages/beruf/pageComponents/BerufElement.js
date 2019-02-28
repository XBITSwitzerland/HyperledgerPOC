import React, { PureComponent } from 'react'

export default class BerufElement extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    this.props.changeSelection(this.props.beruf);
  }

  render() {
    const { id, berufKurz, berufLang } = this.props.beruf;

    return (
      <tr>
          <td>{ id }</td>
          <td>{ berufKurz }</td>
          <td>{ berufLang }</td>
          <td style={alignRight}><button onClick={this.handleClick}>Bearbeiten</button></td>
      </tr>
    )
  }
}

const alignRight = {
    textAlign: 'right'
}