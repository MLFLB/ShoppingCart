import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions/actionsCart';

const Cart = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.CartState.panier);

  const removePanier = (id) => () => dispatch(removeFromCart(id));

  const _renderBasket = () => {
    return data.map(item => (
      <ul key={item.id}>
        <li>{item.number} - {item.name} <button onClick={removePanier(item)}>Remove</button> </li>
      </ul>
    ));
  };

  return (
    <div>
      <span>Votre Panier : </span>
      {_renderBasket()}
      <button>Reset</button>
    </div>
  );
};

export default Cart;