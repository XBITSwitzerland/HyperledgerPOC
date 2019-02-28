import React, { PureComponent } from 'react'

export default class LernendeElement extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    this.props.changeSelection(this.props.lehrling);
  }

  render() {
    const { vorname, nachname, geburtstag, lehrbeginn, lehrende, lehrgang } = this.props.lehrling;

    return (
      <tr>
          <td>{ vorname }</td>
          <td>{ nachname }</td>
          <td>{ geburtstag }</td>
          <td>{ lehrbeginn }</td>
          <td>{ lehrende }</td>
          <td>{ lehrgang.name }</td>
          <td style={alignRight}><button onClick={this.handleClick}>Bearbeiten</button></td>
      </tr>
    )
  }
}

const alignRight = {
    textAlign: 'right'
}