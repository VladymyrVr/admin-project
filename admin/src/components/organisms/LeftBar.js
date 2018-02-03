import React from 'react';

import { Link} from 'react-router-dom';

import './LeftBar.css';


class LeftBar extends React.Component {
    render() {
        return (
            <div className="SideMenu">
                <nav className="SideNav">
                    <ul className="NavList">
                        <li><Link className="Home"  to="/">Home</Link></li>
                        <li><Link className="Workflow" to="/workflow">Workflow</Link></li>
                        <li><Link className="Statistics" to="/statistics">Statistics</Link></li>
                        <li><a className="Calendar" href="">Calendar</a></li>
                        <li><Link className="User" to="/users">Users</Link></li>
                        <li><a className="Settings" href="">Settings</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default LeftBar;