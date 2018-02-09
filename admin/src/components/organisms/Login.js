import React from 'react';
import { withRouter } from 'react-router-dom'

import './Login.css';

//components
import EnterButton from "../atoms/Buttons/EnterButton";


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit =(e) => {
        e.preventDefault();
        let username = JSON.parse(localStorage.getItem("username")),
            password = JSON.parse(localStorage.getItem("password"));

        if(username === this.state.username && password === this.state.password) {
            this.props.history.push('/')
        } else {
           alert('Your username or login is incorrect');
            this.setState ({
               username: '',
                password: ''
            });
        }
    };


    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    render() {
        return (
            <div className="Login">
                <h2>Welcome <span>back!</span></h2>
                <form className="LoginForm" onSubmit={this.handleSubmit}>
                    <input className="UsersField" name="username" type="text" placeholder="Username"
                           value={this.state.username} onChange={this.handleChange} required/>
                    <input className="PasswordField" name="password" type="password" placeholder="Password"
                           value={this.state.password} onChange={this.handleChange} required/>
                    <EnterButton/>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);