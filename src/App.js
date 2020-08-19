import React from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './hoc/Aux';
import { Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <Aux>
      <Switch>
        <Route path="/" render={props => <Layout {...props} />} />
      </Switch>
    </Aux>
  );
}

export default App;
