import React, { Component } from 'react'
import { connect } from 'react-redux';
import { LoginAction } from '../../../Store/Actions/UserAction';

class Header extends Component {
    state = {
        name: "",
    }

    getName = (name, id) => {
        this.setState({
            name: name
        });
        this.props.LoginAction(id)
    }

    render() {
        const list = this.props.UserReducer.userList;
        const { name } = this.state;

        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <button className="btn-header">
                        <i className="fas fa-search" />
                    </button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="nav custom-navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">+ Add</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="far fa-envelope" /></a>
                            </li>
                            <li className="nav-item border-right-0">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {name ? name : "Login"}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <ul className="list-group list-group-flush">
                                        {list.map((item) => <li className="list-group-item" key={item.id} onClick={() => this.getName(item.first_name + " " + item.last_name, item.id)}>
                                            <h6 className="mb-0">{item.first_name + " " + item.last_name}</h6>
                                            <p className="text-muted small mb-0">{item.email}</p>
                                        </li>)}
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href className="nav-link ">
                                    <i className="far fa-bell" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}

const mapStateToProps = (state) => {
    const { UserReducer } = state;
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        LoginAction: (id) => dispatch(LoginAction(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
