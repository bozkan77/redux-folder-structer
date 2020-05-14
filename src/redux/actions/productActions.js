import * as actionTypes from './actionTypes';

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload: products,
  };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = 'http://localhost:4000/products';
    if (categoryId) {
      url = url + '?categoryId=' + categoryId;
    }
    return fetch(url)
      .then((res) => res.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
