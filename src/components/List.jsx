import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Adidas',
          img: "https://dummyimage.com/100x100/000/fff",
          pointure: 41,
          price: 199
        },
        {
          id: 2,
          name: 'Nike',
          img: "https://dummyimage.com/100x100/000/fff",
          pointure: 39,
          price: 299
        },
        {
          id: 3,
          name: 'New Balance',
          img: "https://dummyimage.com/100x100/000/fff",
          pointure: 40,
          price: 129
        },
        {
          id: 4,
          name: 'Vans',
          img: "https://dummyimage.com/100x100/000/fff",
          pointure: 36,
          price: 79
        }
      ]
    }
  }

  

  render() {
    const productList = this.state.products.map((product) => (
      <div className="cardProduct">
        <Card key={product.id}>
        <CardImg className="imgProduct" top src={product.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardSubtitle>{product.pointure}</CardSubtitle>
            <CardText>{product.price} €</CardText>
            <Button>Add to Cart</Button>
          </CardBody>
        </Card>
      </div>
    )

    )

    return (<div>
      {productList}
    </div>)
  }
}

export default List;