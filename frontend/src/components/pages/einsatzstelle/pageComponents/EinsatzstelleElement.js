import React, { PureComponent } from 'react'

export default class EinsatzstelleElement extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    this.props.changeSelection(this.props.einsatzstelle);
  }

  render() {
    const { id, langBezeichnung, kurzBezeichnung, stellenBeschreibung, bemerkung, beruf, lehrjahr, ausbildner } = this.props.einsatzstelle;

    return (
      <tr>
          <td>{ id }</td>
          <td>{ langBezeichnung }</td>
          <td>{ stellenBeschreibung }</td>
          <td>{ bemerkung }</td>
          <td>{ beruf.berufKurz }</td>
          <td>{ lehrjahr }</td>
          <td>{ ausbildner.vorname } { ausbildner.nachname }</td>
          <td style={alignRight}><button onClick={this.handleClick}>Bearbeiten</button></td>
      </tr>
    )
  }
}

const alignRight = {
    textAlign: 'right'
}