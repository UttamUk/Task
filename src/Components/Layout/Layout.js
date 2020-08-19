import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import SideBar from '../Common/SideBar/SideBar';
import Header from '../Common/Header/Header';

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
                <SideBar />
                <main>
                    <Header />
                    <section className="dashboad">
                        <Switch>
                            {this.getRoutes(routes)}
                        </Switch>
                    </section>
                </main>
            </Aux>
        )
    }
}

export default Layout;
