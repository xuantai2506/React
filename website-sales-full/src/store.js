import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer } from './reducers/productReducers';

const initialState = {};
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    composedEnhancer
)
export default store;