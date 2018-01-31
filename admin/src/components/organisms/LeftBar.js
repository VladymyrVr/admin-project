import React from 'react';

import './LeftBar.css'


class LeftBar extends React.Component {
    render() {
        return (
            <div className="SideMenu">
                <nav className="SideNav">
                    <ul className="NavList">
                        <li><a className="Home" href="">Home</a></li>
                        <li><a className="Workflow" href="">Workflow</a></li>
                        <li><a className="Statistics" href="">Statistics</a></li>
                        <li><a className="Calendar" href="">Calendar</a></li>
                        <li><a className="User" href="">Users</a></li>
                        <li><a className="Settings" href="">Settings</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default LeftBar;