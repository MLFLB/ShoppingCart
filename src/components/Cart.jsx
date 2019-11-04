import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions/actionsCart';
import { Table } from 'reactstrap';

const Cart = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.CartState.panier);

  const removePanier = (id) => () => dispatch(removeFromCart(id));

  const _renderBasket = () => {
    return data.map(item => (
      <tr key={item.id}>
        <th id="thCenter" scope="row">{item.number}</th>
        <td id="thCenter"><img alt="product" src={item.img} /></td>
        <td id="thCenter">{item.name}</td>
        <td id="thCenter">{item.price} €</td>
        <td id="thCenter"><button onClick={removePanier(item)}>Remove</button></td>
      </tr>

      // <ul className="ulTab" key={item.id}>
      //   <li className="listTab"> <div><img alt="product" src={item.img} /></div> <div className="numberTab">{item.number}</div> <div>{item.name}</div> <div>{item.price} €</div> <div><button onClick={removePanier(item)}>Remove</button></div> </li>
      // </ul>
    ));
  };

  const _renderPrice = () => {
    return data.map(el => (el.price * el.number)).reduce((total, actualPrice) => total + actualPrice, 0)
  };

  return (
    <div>
      <Table striped responsive>
        <thead>
          <tr>
            <th>Number</th>
            <th>Picture</th>
            <th>Name Product</th>
            <th>Price</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>
          {_renderBasket()}
          <tr>
            <td colspan="6" className="alert-link">Total : {_renderPrice()} €</td>
          </tr>
        </tbody>
      </Table>
      {/* <span>Total : </span>
      {_renderPrice()} € */}
    </div>
  );
};

export default Cart;