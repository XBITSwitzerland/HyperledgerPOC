import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  loginFunction = (e) => {
      e.preventDefault();
      fetch('https://localhost:3000/auth/jwt/callback', {
          method: 'GET', 
          headers: {
            "Content-Type": "text/plain",
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOjE1MjcxNjI1MDQ3NDI1NjUwODcsInVzZXJuYW1lIjoiZ2FuZ2FjaHJpcyJ9.WyARsOhMSDVRjUpd-rPBI1A8-Vpz7pDS6rICXKN8W3U'
          }
          /*body: JSON.stringify({

          })*/
      }).then(function(response){
          return response.json();
      }).then(function(result){
          console.log("TESTESTE")
      })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.loginFunction}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}