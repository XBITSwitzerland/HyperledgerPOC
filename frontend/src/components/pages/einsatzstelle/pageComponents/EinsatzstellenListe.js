import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
import EinsatzstelleElemente from './EinsatzstelleElemente';

export default class EinsatzstellenListe extends PureComponent {
  render() {
    return (
      <div>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Bezeichnung</th>
                    <th>Stellenbeschreibung</th>
                    <th>Bemerkung</th>
                    <th>Beruf</th>
                    <th>Lehrjahr</th>
                    <th>Ausbildner</th>
                    <th style={th_style}><button onClick={this.props.changeCreateEinsatzstelle}>Erstellen</button></th>
                </tr>
            </thead>
            <tbody>
                <EinsatzstelleElemente changeSelection={this.props.changeSelection} einsatzstellen={this.props.einsatzstellen} />
            </tbody>
        </Table>
      </div>
    )
  }
}

var th_style = {
  textAlign: "right"
}