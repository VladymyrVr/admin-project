import React from 'react';
import {withRouter} from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './Login.css';

//components
import EnterButton from "../atoms/Buttons/EnterButton";


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            open: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let userData = {
            login: this.state.username,
            pass: this.state.password
        };

        fetch('/api/auth', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(res => {
                if (res.check) {
                    JSON.stringify(localStorage.setItem("checkUser", res.check));
                    localStorage.setItem("user", JSON.stringify(res.username));
                    this.props.history.push('/')
                } else {
                    this.setState({
                        username: '',
                        password: '',
                        open: true
                    });
                }
            });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="Login">
                    <h2>Welcome <span>back!</span></h2>
                    <form className="LoginForm" onSubmit={this.handleSubmit}>
                        <input className="UsersField" name="username" type="text" placeholder="Username"
                               value={this.state.username} onChange={this.handleChange} required/>
                        <input className="PasswordField" name="password" type="password" placeholder="Password"
                               value={this.state.password} onChange={this.handleChange} required/>
                        <EnterButton/>
                        <Snackbar
                            open={this.state.open}
                            message="Your username or login is incorrect, please try again!"
                            autoHideDuration={2500}
                            onRequestClose={this.handleRequestClose}
                            className="SnackBarStyle"
                        />
                    </form>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default withRouter(Login);