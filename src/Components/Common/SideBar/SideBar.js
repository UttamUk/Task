import React, { Component } from 'react'

export class SideBar extends Component {
    render() {
        return (
            <aside>
                <h2 className="sidebar-title">
                    <i className="fas fa-bars" />
                </h2>
                <ul className="nav flex-column custom-sidebar">
                    <li className="nav-item custom-sidebar-item">
                        <a className="nav-link custom-sidebar-link" href="#">
                            <i className="fas fa-home" />
                        </a>
                    </li>
                    <li className="nav-item custom-sidebar-item">
                        <a className="nav-link custom-sidebar-link active" href="#">
                            <i className="fas fa-user-alt" />
                        </a>
                    </li>
                    <li className="nav-item custom-sidebar-item">
                        <a className="nav-link custom-sidebar-link" href="#">
                            <i className="fas fa-cog" />
                        </a>
                    </li>
                    <li className="nav-item custom-sidebar-item">
                        <a className="nav-link custom-sidebar-link" href="#">
                            <i className="fas fa-comments" />
                        </a>
                    </li>
                    <li className="nav-item custom-sidebar-item">
                        <a className="nav-link custom-sidebar-link" href="#">
                            <i className="fas fa-calendar" />
                        </a>
                    </li>
                    <li className="nav-item custom-sidebar-item">
                        <a className="nav-link custom-sidebar-link" href="#">
                            <i className="fas fa-bell" />
                        </a>
                    </li>
                </ul>
            </aside>

        )
    }
}

export default SideBar;
