import React, { PureComponent } from 'react'

export default class SearchField extends PureComponent {
  state = {
    searchQuery: ''
  }

  onChange = (e) => this.setState({ searchQuery: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.changeQuery(this.state.searchQuery);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} type="text" name="search_text" value={this.state.searchQuery}/>
            <input style={buttonStyle} type="submit" value="Suchen" />
        </form>
      </div>
    )
  }
}

const buttonStyle = {
    
}