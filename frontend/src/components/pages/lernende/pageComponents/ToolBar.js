import React, { PureComponent } from 'react'
import { Row, Col } from 'reactstrap';
import SearchField from './SearchField'


export default class ToolBar extends PureComponent {
  render() {
    return (
      <div style={toolbarStyle}>
        <Row>
            <Col style={colStyle}>
                <SearchField searchQuery={this.props.searchQuery} changeQuery={this.props.changeQuery} />
            </Col>
        </Row>
      </div>
    )
  }
}

const colStyle = {
    textAlign: 'right'
}

const toolbarStyle = {
    backgroundColor: '#656565',
    width: '100%',
    padding: '1rem 1rem'
}