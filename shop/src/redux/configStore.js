import { combineReducers, createStore } from 'redux';
import { reducer2 } from './modules/order';
import { reducer } from './modules/cart';

// reducer를 여러 개 쓸 때: ','로 연결 x, combineReducers 사용 (import + 안에 reducer들은 객체형으로)
let store = createStore(combineReducers({ reducer, reducer2 }));

export default store;
