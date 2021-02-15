import React from 'react';
import './App.scss';
import Navbar from './components/header/header.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/search';
import CollectionPage from './pages/collection/collection.component';
import SidebarProvider from './providers/sidebar/sidebar.provider';
import CartProvider from './providers/cart/cart.provider';
import SearchProvider from './providers/search/search.provider';

class App extends React.Component {

  render() {

    return (
      <SearchProvider>
        <CartProvider>
          <SidebarProvider>
            <Router>
              <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/search' component={Search} />
                <Route path='/:id' component={CollectionPage} />
              </Switch>
            </Router>
          </SidebarProvider>
        </CartProvider>
      </SearchProvider>
    );
  }
}




export default App;
