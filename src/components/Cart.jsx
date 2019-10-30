import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panier: []
    }
  }

  render(){
    return (
      <div>
        <span>Panier</span>
      </div>
    )
  }
}


export default Cart;