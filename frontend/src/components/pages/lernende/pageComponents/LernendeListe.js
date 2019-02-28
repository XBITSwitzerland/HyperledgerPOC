import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
import LernendeElemente from './LernendeElemente';

export default class LernendeListe extends PureComponent {
  render() {
    return (
      <div>
        <Table>
            <thead>
                <tr>
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>Geburtsdatum</th>
                    <th>Lehrbeginn</th>
                    <th>Lehrende</th>
                    <th>Lehrgang</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <LernendeElemente changeSelection={this.props.changeSelection} searchQuery={this.props.searchQuery} lehrlinge={this.props.lehrlinge} />
            </tbody>
        </Table>
      </div>
    )
  }
}
