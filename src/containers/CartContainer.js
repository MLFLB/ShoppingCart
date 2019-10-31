import { connect } from 'react-redux';

import Cart from '../components/Cart';
import {  } from '../actions/actionsCart';

const mapStateToProps = (state) => ({
  panier: state.CartState.panier,
});

const mapDispatchToProps = {
 
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

