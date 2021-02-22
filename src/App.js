import React from 'react';
import './App.scss';
import Header from './components/header/header.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Home from './pages/home/Home';
import Search from './pages/search/search';
import Checkout from './pages/checkout/checkout.component';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/:id' component={ShopPage} />
        </Switch>
      </Router>
    );
  }
}




export default App;
