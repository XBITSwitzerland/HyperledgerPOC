import React, { PureComponent } from 'react';
import { Table } from 'reactstrap';
import LehrgangElemente from './LehrgangElemente';

export default class LehrgangListe extends PureComponent {
  render() {
    return (
      <div>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Beruf</th>
                    <th>ES1</th>
                    <th>ES2</th>
                    <th>ES3</th>
                    <th>ES4</th>
                    <th style={th_style}><button onClick={this.props.changeCreateLehrgang}>Erstellen</button></th>
                </tr>
            </thead>
            <tbody>
                <LehrgangElemente changeSelection={this.props.changeSelection} lehrgange={this.props.lehrgange} />
            </tbody>
        </Table>
      </div>
    )
  }
}

var th_style = {
  textAlign: "right"
}