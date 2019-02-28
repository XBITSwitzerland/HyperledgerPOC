import React, { PureComponent } from 'react';
import SelectedLehrgang from './pageComponents/SelectedLehrgang';
import LehrgangListe from './pageComponents/LehrgangListe';

export default class Lehrgange extends PureComponent {
  state = {
    selectedLehrgang: '',
    createLehrgangBool: false
  }

  changeSelection = (selection) => {
    this.setState({selectedLehrgang: selection});
  }

  changeCreateLehrgang = () => {
    var newstate = !this.state.createLehrgangBool;
    this.setState({createLehrgangBool: newstate})
  }

  render() {
    console.log("WAZA: " + JSON.stringify(this.props.lehrgange));
    if(this.state.selectedLehrgang !== '' || this.state.createLehrgangBool === true) {
      return (
        <div>
          <SelectedLehrgang createLehrgang={this.props.createLehrgang} changeCreateLehrgang={this.changeCreateLehrgang} deleteLehrgang={this.props.deleteLehrgang} changeLehrgang={this.props.changeLehrgang} changeSelection={this.changeSelection} selectedLehrgang={this.state.selectedLehrgang} />
          <LehrgangListe changeCreateLehrgang={this.changeCreateLehrgang} changeSelection={this.changeSelection} lehrgange={this.props.lehrgange} />
        </div>
      )
    } else {
      return (
        <div>
          <LehrgangListe changeCreateLehrgang={this.changeCreateLehrgang} changeSelection={this.changeSelection} lehrgange={this.props.lehrgange} />
        </div>
      )
    }
  }
}
