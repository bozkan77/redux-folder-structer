import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions/categoryActions';
import { saveProduct } from '../../redux/actions/productActions';
import ProductDetail from './ProductDetail';

const AddOrUpdateProducts = ({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) => {
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({
      ...props.product,
    });
  }, [props.product]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((previusProduct) => ({
      ...previusProduct,
      [name]: name === 'categoryId' ? parseInt(value, 10) : value,
    }));

    validate(name, value);
  };

  const validate = (name, value) => {
    if (name === 'productName' && value === '') {
      setErrors((previusErrors) => ({
        ...previusErrors,
        productName: 'Product name is required',
      }));
    } else {
      setErrors((previusErrors) => ({
        ...previusErrors,
        productName: '',
      }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveProduct(product).then(() => {
      history.push('/');
    });
  };

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
};

export function getProductById(products, productId) {
  let product =
    products.find((product) => product.id === parseInt(productId)) || null;
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};

  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrUpdateProducts);
