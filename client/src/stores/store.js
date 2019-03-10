import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from '../reducers/productReducer';

const store = createStore(
    combineReducers({
        product: productReducer
    }),
    applyMiddleware(
        thunk
    )
);

export default store;