import * as actionTypes from './actionTypes';

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload: products,
  };
}
export function createProductSuccess(product) {
  return {
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
    payload: product,
  };
}
export function updateProductSuccess(product) {
  return {
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function saveProductApi(product) {
  console.log(product);
  return fetch('http://localhost:4000/products/' + (product.id || ''), {
    method: product.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((err) => {
        throw err;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const err = await response.text();
  throw new Error(err);
}

export function handleError(err) {
  console.error('Something went wrong');
  throw err;
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
