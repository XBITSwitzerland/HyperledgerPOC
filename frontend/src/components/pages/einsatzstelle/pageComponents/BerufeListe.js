import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
import BerufeElemente from './EinsatzstelleElemente';

export default class BerufeListe extends PureComponent {
  render() {
    return (
      <div>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Beruf Kurz</th>
                    <th>Beruf Lang</th>
                    <th style={th_style}><button onClick={this.props.changeCreateBeruf}>Erstellen</button></th>
                </tr>
            </thead>
            <tbody>
                <BerufeElemente changeSelection={this.props.changeSelection} berufe={this.props.berufe} />
            </tbody>
        </Table>
      </div>
    )
  }
}

var th_style = {
  textAlign: "right"
}