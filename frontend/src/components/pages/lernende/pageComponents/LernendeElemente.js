import React, { PureComponent } from 'react'
import LernendeElement from './LernendeElement';

export default class LernendeElemente extends PureComponent {

  render() {
    var lehrlinge = this.props.lehrlinge;
    const searchQuery = this.props.searchQuery;
    
    if(searchQuery !== '') {
        lehrlinge = lehrlinge.filter(lehrling => lehrling.vorname.includes(searchQuery) || lehrling.nachname.includes(searchQuery));
    }

    return lehrlinge.map((lehrling) => (
        <LernendeElement changeSelection={this.props.changeSelection} key={lehrling.id} lehrling={lehrling} />
    ))
  }
}
