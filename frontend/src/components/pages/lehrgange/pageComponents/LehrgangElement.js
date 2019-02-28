import React, { PureComponent } from 'react'

export default class LehrgangElement extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    this.props.changeSelection(this.props.lehrgange);
  }

  render() {
    const { id, name, beruf, einsatzstellen } = this.props.lehrgang;

    return (
      <tr>
          <td>{ id }</td>
          <td>{ name }</td>
          <td>{ beruf.berufKurz }</td>
          <td>{ }</td>
          <td>{ }</td>
          <td>{ }</td>
          <td>{ }</td>
          <td style={alignRight}><button onClick={this.handleClick}>Bearbeiten</button></td>
      </tr>
    )
  }
}

const alignRight = {
    textAlign: 'right'
}