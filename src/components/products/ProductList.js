import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';
import { Table } from 'reactstrap';

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
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
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope='row'>{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(ProductList);
