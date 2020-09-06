import React, { Suspense } from 'react';
import Aux from './hoc/Aux';
import { Switch, Route } from 'react-router-dom';
// import Layout from './Components/Layout/Layout';
const Layout = React.lazy(() => import('./Components/Layout/Layout'));

function App() {
  return (
    <Aux>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" render={props => <Layout {...props} />} />
        </Switch>
      </Suspense>
    </Aux>
  );
}

export default App;
