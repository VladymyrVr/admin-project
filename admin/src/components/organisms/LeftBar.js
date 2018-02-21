import React from 'react';

import { NavLink} from 'react-router-dom';

import './LeftBar.css';


class LeftBar extends React.Component {
    render() {
        return (
            <div className="SideMenu">
                <nav className="SideNav">
                    <ul className="NavList">
                        <li><NavLink className="Home" activeclassname="ActiveLink" exact  to="/">Home</NavLink></li>
                        <li><NavLink className="Workflow" activeclassname="ActiveLink" to="/workflow">Workflow</NavLink></li>
                        <li><NavLink className="Statistics" activeclassname="ActiveLink"to="/statistics">Statistics</NavLink></li>
                        <li><NavLink className="Calendar" activeclassname="ActiveLink" to="/calendar">Calendar</NavLink></li>
                        <li><NavLink className="User" activeclassname="ActiveLink" to="/users">Users</NavLink></li>
                        <li><NavLink className="Settings" activeclassname="ActiveLink" to="/settings">Settings</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default LeftBar;