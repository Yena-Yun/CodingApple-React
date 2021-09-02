import { combineReducers } from 'redux';
import { reducer } from './modules/cart';
import { reducer2 } from './modules/order';

let rootReducer = combineReducers({ reducer, reducer2 });

export default rootReducer;
