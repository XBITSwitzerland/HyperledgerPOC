import React, { PureComponent } from 'react'
import LehrgangElement from './LehrgangElement';

export default class LehrgangElemente extends PureComponent {

  render() {
    var lehrgange = this.props.lehrgange;
    return lehrgange.map((lehrgang) => (
        <LehrgangElement changeSelection={this.props.changeSelection} key={lehrgang.id} lehrgang={lehrgang} />
    ))
  }
}
