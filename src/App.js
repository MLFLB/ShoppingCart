import React, { useState } from 'react';
import './App.css';
//import Cart from './components/Cart';
import List from './containers/ListContainer';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';
// import Navbar from './components/Navbar';
// import { read } from 'fs';


// View => event(dispatch(action)) => action(type, payload) => read(type) => store(payload) => View(store)

const App = () => {

  const data = useSelector(state => state.CartState.panier);

  const [tab, setTab] = useState('list');

  const _changeTab = (tab) => () => setTab(tab);

  const _renderContent = () => {
    return (tab === 'panier') ? <Cart /> : <List />;
  };

  const _renderNumber = () => {
    return data.map(el => (el.number)).reduce((total, actualQuantity) => total + actualQuantity, 0)
  };

  return (
    <div className="App">
      <div className="tabContainer">
        <div className="activeTab" onClick={_changeTab('list')}>
          <p>shop</p>
        </div>
        <div className="activeTab" onClick={_changeTab('panier')}>
          <p>panier ({_renderNumber()})</p>
        </div>
      </div>
      {_renderContent()}
    </div>
  );
};

export default App;
