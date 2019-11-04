import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'; // ça tu oublies :D
import { data } from '../constants/data';
import { addToCart } from '../actions/actionsCart';
import { useDispatch } from 'react-redux';

// PureComponent: intègre le shouldComponentUpdate (go voir la doc); ;)
const List = () => {
  const dispatch = useDispatch();

  const addToPanier = (product) => () => dispatch(addToCart(product));
  
  // découpage en fonction pour garder un render lisible 
  const _renderContent = () => {
    return data.map(product => (
      <div key={product.id} className={'cardProduct'}>
        <Card>
        <CardImg className="imgProduct" top src={product.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardSubtitle>{product.pointure}</CardSubtitle>
            <CardText>{product.price} €</CardText>
            <Button color="info" onClick={addToPanier(product)}>Add to Cart</Button>
          </CardBody>
        </Card>
      </div>
    ));
  };

    return _renderContent();

}

export default List;