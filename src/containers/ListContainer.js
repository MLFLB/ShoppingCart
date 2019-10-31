import { connect } from 'react-redux';

import List from '../components/List';
import { addToCart } from '../actions/actionsCart';

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(List);

