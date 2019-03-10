import constants from '../constants/actionTypes';

let initialState = {
    products: [],
    productItem: {},
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);
    
    switch(action.type) {
        case constants.PRODUCTITEM_RECEIVED:
            updated['productItem'] = action.productItem;
            return updated;
        default:
            return state
    }
}