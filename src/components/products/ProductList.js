import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
import { Table, Badge, Button } from 'reactstrap';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName);
  };

  render() {
    return (
      <div>
        <h3>
          Products <Badge>{this.props.currentCategory.categoryName}</Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope='row'>{product.id}</th>
                <td>
                  <Link to={'/saveproduct/' + product.id}>
                    {product.productName}
                  </Link>
                </td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    color='success'
                    onClick={() => this.addToCart(product)}
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
};

const mapDispatchTopProps = (dispatch) => {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(ProductList);
