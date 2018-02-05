import React from 'react';

import './PasswordField.css';

class PasswordField extends React.Component {
    render() {
        return (
            <input className="PasswordField" type="password" placeholder="Password"/>
        )
    }
}

export default PasswordField;