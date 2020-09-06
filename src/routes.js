import React from 'react';
// import Dashboard from './Views/Dashboard/Dashboard';
const Dashboard = React.lazy(() => import('./Views/Dashboard/Dashboard'));

const routes = [
    { path: "", exact: true, name: "Dashboard", component: Dashboard },
];

export default routes;