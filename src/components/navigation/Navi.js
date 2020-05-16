import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Redux-Sample</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className='mr-auto' navbar>
              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
