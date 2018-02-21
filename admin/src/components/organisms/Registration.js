import React from 'react';
import {withRouter} from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './Registratiom.css';

//components
import EnterButton from "../atoms/Buttons/EnterButton";

class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            open: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let persondata = {
            username : this.state.username,
            password : this.state.password,
            email : this.state.email,
        };

        fetch('/api/user/register' , {
            headers: {
              'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(persondata),
        });


        this.setState({
            username: '',
            password: '',
            email: '',
            open: true
        })
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
                <div className="Registration">
                    <h2>Create your <span>account</span></h2>
                    <form className="RegistrationForm" onSubmit={this.handleSubmit}>
                        <input className="UsersField" name="username" type="text" placeholder="Username"
                               value={this.state.username} onChange={this.handleChange} required/>
                        <input className="PasswordField" name="password" type="password" placeholder="Password"
                               value={this.state.password} onChange={this.handleChange} required/>
                        <div className="EmailInput">
                            <input className="EmailField" type="email" placeholder="Email" name="email"
                                   value={this.state.email} onChange={this.handleChange}/>
                            <span className="EmailIcon"><i className="fas fa-envelope"></i></span>
                        </div>
                        <EnterButton/>
                        <Snackbar
                            open={this.state.open}
                            message="The registration was successfully"
                            autoHideDuration={1500}
                            onRequestClose={this.handleRequestClose}
                            className="SnackBarStyle"
                        />
                    </form>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default withRouter(Registration);