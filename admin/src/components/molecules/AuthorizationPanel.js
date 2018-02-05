import React from 'react';

import Logo from '../../assets/img/logo.png'

import './AuthorizationPanel.css';

class AuthorizationPanel extends React.Component {
    render() {
        return (
            <header className="AuthorizationPanel">
                <div className="LogoMerc">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="AuthPanel">
                    <a className="RegisterLink" href="">Register</a>
                    <a className="LoginLink" href="">Login</a>
                </div>
            </header>
        )
    }
}

export default AuthorizationPanel;