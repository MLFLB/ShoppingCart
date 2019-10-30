// import { combineReducer } from 'redux';
import { ADD_TO_CART, REMOVE_TO_CART } from '../actions/actionsCart';

const initialState = {
  panier: []
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART :
      return Object.assign({}, state, {
        panier : [
          ...state.panier
        ]
      })
    case REMOVE_TO_CART : return {
      ...state
    }
    default :
      return state;
  }
}

export default cartReducer;