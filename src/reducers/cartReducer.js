// import { combineReducer } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionsCart';

const initialState = {
  panier: [],
};

const addToCart = (panier, product) => {
  const item = panier.find((ite) => ite.id === product.id);
  if (item) {
    const idx = panier.findIndex((ite) => ite.id === product.id);
    panier[idx] = {
      ...panier[idx],
      number: panier[idx].number + 1,
    };
    return panier;
  } else {
    const newProduct = {
      ...product,
      number: 1,
    };
    return [...panier, newProduct];
  }
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    
      case ADD_TO_CART: {
        const { product } = action.payload;
        const { panier } = state;
        const newData = addToCart(panier, product);
        console.log('data : ', newData);
        
        return {
          ...state,
          panier: newData,
        }
      }
      
    case REMOVE_FROM_CART : return {
      ...state
    }
    default :
      return state;
  }
}

export default cartReducer;