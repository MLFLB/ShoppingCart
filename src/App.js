import React, { useState } from 'react';
import './App.css';
//import Cart from './components/Cart';
import List from './containers/ListContainer';
import Cart from './components/Cart';
// import Navbar from './components/Navbar';
// import { read } from 'fs';


const styles = {
  container: {

  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 50,
  },
  // tab: {
  //   height: 50,
  //   width: '50%',
  //   backgroundColor: 'cadetblue',
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   border: '1px solid black',
  //   paddingTop: 15,
  //   textTransform: "uppercase",
  //   fontWeight: "bold",
  // },
 
  activeTab: {

  },

};

// View => event(dispatch(action)) => action(type, payload) => read(type) => store(payload) => View(store)

const App = () => {

  const [tab, setTab] = useState('list');

  const _changeTab = (tab) => () => setTab(tab);

  const _renderContent = () => {
    return (tab === 'panier') ? <Cart /> : <List />;
  };

  return (
    <div className="App">
      <div style={styles.tabContainer}>
        <div className="activeTab" style={styles.tab} onClick={_changeTab('list')}>
          <p>shop</p>
        </div>
        <div className="activeTab" style={styles.tab} onClick={_changeTab('panier')}>
          <p>panier</p>
        </div>
      </div>
      {_renderContent()}
    </div>
  );
};

export default App;
