import React, { PureComponent } from 'react'
import { Row, Col } from 'reactstrap';

export default class Footer extends PureComponent {
  render() {
    return (
      <div style={footerStyle}>
        <Row>
            <Col>
                <p style={pStyle}>&copy; Copyright Siemens</p>
            </Col>
            <Col style={{textAlign: 'right'}}>
                <p style={pStyle}>Logo</p>
            </Col>
        </Row>
      </div>
    )
  }

  

}

const footerStyle = {
    backgroundColor: "#ccc",
    width: '100%',
    padding: '.5rem 1rem'
}

const pStyle = {
    marginBottom: '0',
    fontSize: '12px'
}
