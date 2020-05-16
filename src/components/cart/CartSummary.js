import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from 'reactstrap';

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Your cart is empty</NavLink>
      </NavItem>
    );
  }
  removeFromCart(cartItem) {
    this.props.actions.removeFromCart(cartItem.product);
    alertify.error(`${cartItem.product.productName} removed from cart`);
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.productId}>
              <Badge
                color='danger'
                onClick={() => this.removeFromCart(cartItem)}
              >
                X
              </Badge>
              {cartItem.product.productName}
              <Badge color='success'>{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to={'/cart'}>Go to cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
