import React from 'react';
import { withRouter } from 'react-router-dom';

import './Registratiom.css';

//components
import EnterButton from "../atoms/Buttons/EnterButton";

class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    handleSubmit =(e) => {
        e.preventDefault();

        localStorage.setItem("username", JSON.stringify(this.state.username));
        localStorage.setItem("password", JSON.stringify(this.state.password));
        localStorage.setItem("email", JSON.stringify(this.state.email));
        alert('Thanks for registry!');
        this.setState ({
            username: '',
            password: '',
            email: ''
        })
    };


    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };



    render() {
        return (
            <div className="Registration">
                <h2>Create your <span>account</span></h2>
                <form className="RegistrationForm" onSubmit={this.handleSubmit}>
                    <input className="UsersField" name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>
                    <input className="PasswordField" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}  required/>
                    <div className="EmailInput">
                        <input className="EmailField" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                        <span className="EmailIcon"><i className="fas fa-envelope"></i></span>
                    </div>
                    <EnterButton/>
                </form>
            </div>
        )
    }
}

export default withRouter(Registration);