import React, { PureComponent } from 'react'
import BerufElement from './BerufElement';

export default class BerufeElemente extends PureComponent {

  render() {
    var berufe = this.props.berufe;
    
    return berufe.map((beruf) => (
        <BerufElement changeSelection={this.props.changeSelection} key={beruf.id} beruf={beruf} />
    ))
  }
}
