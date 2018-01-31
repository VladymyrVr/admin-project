import React from 'react';

import './menu.css'
import Users from "../Users/Users";

class Menu extends React.Component {
    render() {
        return (
            <div>
                <header className="TopMenu">
                    <div className="LeftPanel">
                        <div className="Logo">
                            <img src="img/logo.png" alt="Logo"/>
                        </div>
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
                </header>
                <div className="FlexWrapper">
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
                    <Users/>
                </div>
            </div>
        )
    }
}

export default Menu;