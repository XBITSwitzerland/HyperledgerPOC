import React, { PureComponent } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  render() {
    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Coursemanagement Software</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lernende">Lernende</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/berufe">Berufe</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/einsatzstellen">Einsatzstellen</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lehrgang">Lehrgang</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
  }
}
