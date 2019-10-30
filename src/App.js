import React from 'react';
import './App.css';
//import Cart from './components/Cart';
import List from './components/List';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <List />
    </div>
  );
}

export default App;
