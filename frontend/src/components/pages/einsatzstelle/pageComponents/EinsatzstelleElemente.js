import React, { PureComponent } from 'react'
import EinsatzstelleElement from './EinsatzstelleElement';

export default class EinsatzstelleElemente extends PureComponent {

  render() {
    var einsatzstellen = this.props.einsatzstellen;
    return einsatzstellen.map((einsatzstelle) => (
        <EinsatzstelleElement changeSelection={this.props.changeSelection} key={einsatzstelle.id} einsatzstelle={einsatzstelle} />
    ))
  }
}
