import actionTypes from '../constants/actionTypes';

function productItemReceived(productItem) { // Action creator
    return {
        type: actionTypes.PRODUCTITEM_RECEIVED,
        productItem
    }
}

export function fetchProductItem(id) {
    return dispatch => {
       return fetch(`/product/${id}`)
       .then( (response) => response.json() )
       .then( (data) => dispatch(productItemReceived(data.data)) )
       .catch( (e) => console.log(e) );
    }
    /*return async dispatch => {
        return await fetch(`/product/${id}`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(productItemReceived(data.data)) )
        .catch( (e) => console.log(e) );
    }*/
}