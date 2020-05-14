import * as actionTypes from './actionTypes';

export function changeCategory(category) {
  return {
    type: actionTypes.GHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORY_SUCCESS,
    payload: categories,
  };
}

export function getCategories() {
  return function (dispatch) {
    let url = 'http://localhost:4000/categories';
    return fetch(url)
      .then((res) => res.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
