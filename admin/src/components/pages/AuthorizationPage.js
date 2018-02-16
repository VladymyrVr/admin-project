import  React from 'react';

import './AuthorizationPage.css';

import Logo from '../../assets/img/logo.png'
//component
import Login from "../organisms/Login";
import Registration from "../organisms/Registration";


class AuthorizationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            tab: 'b'
        }
    }

    tabChange = (value) => {
        this.setState({
            tab: value
        })
    };

    componentWillMount() {
        if (localStorage.getItem('checkUser')) {
            return (
            this.props.history.push('/')
            )
        }
}

    render() {
        return (
            <section className="AuthorizationPage">
                <header className="AuthorizationPanel">
                    <div className="LogoMerc">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <ul className="AuthPanel">
                        <li className={this.state.tab === 'a' ? 'ActiveTab RegisterLink' : 'RegisterLink'} onClick={() => this.tabChange('a')}>Register</li>
                        <li className={this.state.tab === 'b' ? 'ActiveTab LoginLink' : 'LoginLink'} onClick={() => this.tabChange('b')}>Login</li>
                    </ul>

                </header>
                <div className="Authorization">
                    {this.state.tab === 'a' ?
                        <Registration/>
                        :
                        <Login/>
                    }
                </div>
            </section>
        )
    }
}

export default AuthorizationPage;