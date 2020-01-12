import React, { FC } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Details from './components/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default App;
