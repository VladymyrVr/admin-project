import React from 'react';
import {withRouter} from 'react-router-dom'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './TopBar.css';


class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleOpen = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleLogOut = () => {
        localStorage.clear();
        this.props.history.push("/login")
    };


    render() {
        return (
            <MuiThemeProvider>
                <header className="TopMenu">
                    <div className="Logo">
                        <img src="img/logo.png" alt="Logo"/>
                    </div>
                    <div className="LeftPanel">
                        <button className="BurgerButton"></button>
                        <button className="SearchButton"></button>
                    </div>
                    <div className="RightPanel">
                        <button className="AddProject">Add project</button>
                        <a className="MessagesLink">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a className="Notification">
                            <i className="fas fa-bell"></i>
                        </a>
                        <div className="Person">
                            <div className="AvatarWrapper">
                                <img src="img/Menu/person-avatar.png" alt="Avatar"/>
                            </div>
                            <button className="DropButton"
                                    onClick={this.handleOpen}>
                            </button>
                            <Popover
                                open={this.state.open}
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                onRequestClose={this.handleRequestClose}
                                animation={PopoverAnimationVertical}
                            >
                                <Menu>
                                    <MenuItem primaryText="Refresh"/>
                                    <MenuItem primaryText="Help &amp; feedback"/>
                                    <MenuItem primaryText="Settings"/>
                                    <MenuItem onClick={this.handleLogOut} primaryText="Log out"/>
                                </Menu>
                            </Popover>
                        </div>
                    </div>
                </header>
            </MuiThemeProvider>
        )
    }
}

export default withRouter(TopBar);