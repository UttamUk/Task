import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';

class Layout extends Component {

    getRoutes = (routes) => {
        return routes.map((route, index) => {
            return route.component
                ? <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={props => <route.component {...props} />} />
                : (null);
        })
    }

    render() {
        return (
            <Aux>
                <h1 className="heading">SpaceX Launch Programs</h1>
                <div className="main">
                    <Switch>
                        {this.getRoutes(routes)}
                    </Switch>
                </div>
            </Aux>
        )
    }
}

export default Layout;
