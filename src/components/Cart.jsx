import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  
  const data = useSelector(state => state.CartState.panier);

  const _renderBasket = () => {
    return data.map(item => (
      <div key={item.id}>
        {item.name}
        {item.number}
      </div>
    ));
  };

  return (
    <div>
      <span>Panier</span>
      {_renderBasket()}
    </div>
  );
};

export default Cart;