import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import {FoodOrderContext} from './FoodOrderContext';
import Appbar from './components/Appbar';

function App() {
  return (
    <Router>
      <div>
        <FoodOrderContext>
          <Route path="/" component={Appbar}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </FoodOrderContext>
      </div>
    </Router>
  );
}

export default App;
