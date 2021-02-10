import './App.scss';
import Navbar from './components/header/header.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MeyveSebze from './pages/Meyve-sebze';
import EtTavukBalik from './pages/Et-tavuk-balik';
import SutKahvaltilik from './pages/Sut-kahvaltilik';
import GidaSekerleme from './pages/Gida-sekerleme';
import Icecek from './pages/Icecek';
import DeterjanTemizlik from './pages/Deterjan-temizlik';
import KagitKozmetik from './pages/Kagit-kozmetik';
import BebekOyuncak from './pages/Bebek-oyuncak';
import EvPet from './pages/Ev-pet';
import Elektronik from './pages/Elektronik';
import Kampanyalar from './pages/Kampanyalar';
import Migroskop from './pages/Migroskop';
import CollectionOverview from './components/collection-overview/collection.component';
import SidebarProvider from './providers/sidebar/sidebar.provider';

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' exact component={CollectionOverview}/>
          <Route path='/products/fruits-vegetables' component={MeyveSebze}/>
          <Route path='/products/meat-chicken-fish' component={EtTavukBalik}/>
          <Route path='/products/milk-breakfast' component={SutKahvaltilik}/>
          <Route path='/products/food' component={GidaSekerleme}/>
          <Route path='/products/beverage' component={Icecek}/>
          <Route path='/products/detergent-cleaning' component={DeterjanTemizlik}/>
          <Route path='/products/paper-cosmetics' component={KagitKozmetik}/>
          <Route path='/products/baby-toys' component={BebekOyuncak}/>
          <Route path='/products/home-pet' component={EvPet}/>
          <Route path='/products/electronic' component={Elektronik}/>
          <Route path='/products/discounts' component={Kampanyalar}/>
          <Route path='/products/hakanskop' component={Migroskop}/>
        </Switch>
      </Router>
    </SidebarProvider>
  );
}

export default App;
