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
  return fetch(`http://localhost:4000/products/${product.id || ''}`, {
    method: product.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(hadleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProduct(product)
      .then((saveProduct) => {
        product.id
          ? dispatch(updateProductSuccess(saveProduct))
          : dispatch(createProductSuccess(saveProduct));
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

export function hadleError(err) {
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
