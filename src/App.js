import stores from './data/stores.js';
import items from './data/items.js';

import './App.css';
import { GiBeaver } from 'react-icons/gi';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation.js';

import HomePage from './pages/HomePage.js';
import OrderPage from './pages/OrderPage.js';
import StoresPage from './pages/StoresPage.js';
import JokesPage from './pages/JokesPage.js';


function App() {  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <h1> Beaver Store Online </h1>
        <GiBeaver className = 'App-logo'/>
        <p>Your one-stop dam-building shop!</p>
        </header>
        <Navigation />
        <main>
          <Route path ="/" exact><HomePage /></Route>
          <Route path ="/order"><OrderPage items={items} /></Route>
          <Route path ="/stores"><StoresPage stores={stores} /></Route>
          <Route path ="/jokes"><JokesPage /></Route>
        </main>

    <footer>
      <h4>Modified by Ariel, 2/2. &copy; 2022.</h4>
    </footer>
  </Router>
</div>
  );
 }


export default App;
