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
        <li>{item.number} - {item.name} - {item.price} € <button onClick={removePanier(item)}>Remove</button> </li>
      </ul>
    ));
  };

  const _renderPrice = () => {
    return data.map(el => (el.price * el.number)).reduce((total, actualPrice) => total + actualPrice, 0)
  };

  return (
    <div>
      <span>Votre Panier : </span>
      {_renderBasket()}
      <span>Total : </span>
      {_renderPrice()} €
    </div>
  );
};

export default Cart;