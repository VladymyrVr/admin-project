import React from 'react';

import './menu.css'
import Users from "../Users/Users";

class Menu extends React.Component {
    render() {
        return (
                <div className="FlexWrapper">
                    <div className="SideMenu">
                        <div className="logo">
                            <img src="img/logo.png" alt="Logo"/>
                        </div>
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
                    <div className="TopMenu">
                        <div className="LeftPanel">
                            <button className="BurgerButton"></button>
                            <button className="SearchButton"></button>
                        </div>
                        <div className="RightPanel">
                            <button className="AddProject">Add project</button>
                            <a href="#" className="Messages"></a>
                            <a href="#" className="Notification"></a>
                            <div className="Person">
                                <div className="AvatarWrapper">
                                    <img src="img/Menu/person-avatar.png" alt="Avatar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Users/>
                </div>
        )
    }
}

export default Menu;