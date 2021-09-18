import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Basket } from './pages/Basket';
import { history } from '.';
import { getItemsFromLS } from './redux/basket/action';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsFromLS());
  }, []);
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
