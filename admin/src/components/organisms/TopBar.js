import  React from 'react';

import './TopBar.css';


class TopBar extends React.Component {
    render () {
        return (
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
                    <a href="#" className="MessagesLink">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="#" className="Notification">
                        <i className="fas fa-bell"></i>
                    </a>
                    <div className="Person">
                        <div className="AvatarWrapper">
                            <img src="img/Menu/person-avatar.png" alt="Avatar"/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default TopBar;