import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <NavbarBrand>
            <Link to='/'>React-Redux Structure</Link>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link to='/'>Products</Link>
              </NavItem>
              <NavItem>
                <Link to='/saveProduct'>Add Product</Link>
              </NavItem>

              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
