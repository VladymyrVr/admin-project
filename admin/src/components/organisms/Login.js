import React from 'react';

import './Login.css';

//components
import UsersField from "../atoms/Inputs/UsersField";
import PasswordField from "../atoms/Inputs/PasswordField";
import EnterButton from "../atoms/Buttons/EnterButton";


class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <h2>Welcome <span>back!</span></h2>
                <UsersField/>
                <PasswordField/>
                <EnterButton/>
            </div>
        )
    }
}

export default Login;