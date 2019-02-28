import React, { PureComponent } from 'react';
import ToolBar from './pageComponents/ToolBar';
import LernendeListe from './pageComponents/LernendeListe';
import SelectedLehrling from './pageComponents/SelectedLehrling';

export default class Lernende extends PureComponent {
  state = {
    selectedLehrling: '',
    searchQuery: ''
  }

  changeSelection = (selection) => {
    this.setState({selectedLehrling: selection});
  }

  changeQuery = (query) => {
    this.setState({searchQuery: query});
  }

  render() {
    if(this.state.selectedLehrling !== '') {
      return (
        <div>
          <SelectedLehrling deleteLehrling={this.props.deleteLehrling} changeLehrling={this.props.changeLehrling} changeSelection={this.changeSelection} selectedLehrling={this.state.selectedLehrling} />
          <ToolBar searchQuery={this.state.searchQuery} changeQuery={this.changeQuery} />
          <LernendeListe changeSelection={this.changeSelection} searchQuery={this.state.searchQuery} lehrlinge={this.props.lehrlinge} />
        </div>
      )
    } else {
      return (
        <div>
          <ToolBar searchQuery={this.state.searchQuery} changeQuery={this.changeQuery} />
          <LernendeListe changeSelection={this.changeSelection} searchQuery={this.state.searchQuery} lehrlinge={this.props.lehrlinge} />
        </div>
      )
    }
    
  }
}
