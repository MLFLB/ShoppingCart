import React, { useState } from 'react';
import './App.css';
//import Cart from './components/Cart';
import List from './containers/ListContainer';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { read } from 'fs';


const styles = {
  container: {

  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  tab: {
    height: 50,
    width: '50%',
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black'
  },
  activeTab: {
    backgroundColor: 'grey',
  },

};

// View => event(dispatch(action)) => action(type, payload) => read(type) => store(payload) => View(store)

const App = () => {

  const [tab, setTab] = useState('list');

  const _changeTab = (tab) => () => setTab(tab);

  const _renderContent = () => {
    return (tab === 'cart') ? <Cart /> : <List />;
  };

  return (
    <div className="App">
      <div style={styles.tabContainer}>
        <div style={styles.tab} onClick={_changeTab('list')}>
          <p>SHOP</p>
        </div>
        <div style={styles.tab} onClick={_changeTab('cart')}>
          <p>CART</p>
        </div>
      </div>
      {_renderContent()}
    </div>
  );
};

export default App;
