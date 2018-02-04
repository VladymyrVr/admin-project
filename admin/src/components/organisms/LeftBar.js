import React from 'react';

import { NavLink} from 'react-router-dom';

import './LeftBar.css';


class LeftBar extends React.Component {
    render() {
        return (
            <div className="SideMenu">
                <nav className="SideNav">
                    <ul className="NavList">
                        <li><NavLink className="Home" activeClassName="ActiveLink" exact  to="/">Home</NavLink></li>
                        <li><NavLink className="Workflow" activeClassName="ActiveLink" to="/workflow">Workflow</NavLink></li>
                        <li><NavLink className="Statistics" activeClassName="ActiveLink"to="/statistics">Statistics</NavLink></li>
                        <li><a className="Calendar" activeClassName="ActiveLink" href="">Calendar</a></li>
                        <li><NavLink className="User" activeClassName="ActiveLink" to="/users">Users</NavLink></li>
                        <li><a className="Settings" activeClassName="ActiveLink" href="">Settings</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default LeftBar;