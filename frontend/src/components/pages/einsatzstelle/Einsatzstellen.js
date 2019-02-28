import React, { PureComponent } from 'react';
import SelectedEinsatzstelle from './pageComponents/SelectedEinsatzstelle';
import EinsatzstelleListe from './pageComponents/EinsatzstellenListe';

export default class Einsatzstellen extends PureComponent {
  state = {
    selectedEinsatzstelle: '',
    createEinsatzstelleBool: false
  }

  changeSelection = (selection) => {
    this.setState({selectedEinsatzstelle: selection});
  }

  changeCreateEinsatzstelle = () => {
    var newstate = !this.state.createEinsatzstelleBool;
    this.setState({createEinsatzstelleBool: newstate})
  }

  render() {
    if(this.state.selectedEinsatzstelle !== '' || this.state.createEinsatzstelleBool === true) {
      return (
        <div>
          <SelectedEinsatzstelle createEinsatzstelle={this.props.createEinsatzstelle} changeCreateEinsatzstelle={this.changeCreateEinsatzstelle} deleteEinsatzstelle={this.props.deleteEinsatzstelle} changeEinsatzstelle={this.props.changeEinsatzstelle} changeSelection={this.changeSelection} selectedEinsatzstelle={this.state.selectedEinsatzstelle} />
          <EinsatzstelleListe changeCreateEinsatzstelle={this.changeCreateEinsatzstelle} changeSelection={this.changeSelection} einsatzstellen={this.props.einsatzstellen} />
        </div>
      )
    } else {
      return (
        <div>
          <EinsatzstelleListe changeCreateEinsatzstelle={this.changeCreateEinsatzstelle} changeSelection={this.changeSelection} einsatzstellen={this.props.einsatzstellen} />
        </div>
      )
    }
  }
}
