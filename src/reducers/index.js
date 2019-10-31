import { combineReducers } from 'redux';
import CartState from './cartReducer';

const rootReducer = combineReducers({
  CartState,
});

export default rootReducer;
