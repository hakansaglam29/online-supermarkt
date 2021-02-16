import React, { lazy, Suspense } from 'react';
import './App.scss';
import Header from './components/header/header.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Home = lazy(() => import('./pages/home/Home'));
const Search = lazy(() => import('./pages/search/search'));
const CollectionPage = lazy(() => import('./pages/collection/collection.component'));

class App extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Suspense fallback={<div>...loading</div>}>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/:id' component={CollectionPage} />
          </Suspense>
        </Switch>
      </Router>
    );
  }
}




export default App;
