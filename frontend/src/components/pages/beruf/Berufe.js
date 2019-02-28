import React, { PureComponent } from 'react';
import SelectedBeruf from './pageComponents/SelectedBeruf';
import BerufeListe from './pageComponents/BerufeListe';

export default class Lernende extends PureComponent {
  state = {
    selectedBeruf: '',
    createBerufBool: false
  }

  changeSelection = (selection) => {
    this.setState({selectedBeruf: selection});
  }

  changeCreateBeruf = () => {
    var newstate = !this.state.createBerufBool;
    this.setState({createBerufBool: newstate})
  }

  render() {
    if(this.state.selectedBeruf !== '' || this.state.createBerufBool === true) {
      return (
        <div>
          <SelectedBeruf createBeruf={this.props.createBeruf} changeCreateBeruf={this.changeCreateBeruf} deleteBeruf={this.props.deleteBeruf} changeBeruf={this.props.changeBeruf} changeSelection={this.changeSelection} selectedBeruf={this.state.selectedBeruf} />
          <BerufeListe changeCreateBeruf={this.changeCreateBeruf} changeSelection={this.changeSelection} berufe={this.props.berufe} />
        </div>
      )
    } else {
      return (
        <div>
          <BerufeListe changeCreateBeruf={this.changeCreateBeruf} changeSelection={this.changeSelection} berufe={this.props.berufe} />
        </div>
      )
    }
  }
}
