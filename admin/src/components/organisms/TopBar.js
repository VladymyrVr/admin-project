import React from 'react';
import {withRouter} from 'react-router-dom'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {NavLink} from 'react-router-dom';
import './TopBar.css';
import './LeftBar.css';


class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            drawer: false
        };
    }

    handleToggle = () =>  {
        this.setState({drawer: !this.state.drawer});
    };

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
                    <div className={this.state.drawer === false ? "LeftPanel" : "LeftPanel MarginLeft"}>
                        <button className={this.state.drawer === false ? "BurgerButton" : "BurgerButton HiddenIcon"} onClick={this.handleToggle}></button>
                        <button className="SearchButton"></button>
                    </div>
                    <Drawer open={this.state.drawer} width={320} containerClassName="Drawer">
                        <MenuItem innerDivStyle={{padding: 0}} style={{lineHeight: 0}} animated={false}>
                            <div className="Logo">
                                <img src="img/logo.png" alt="Logo"/>
                            </div>
                        </MenuItem>
                        <MenuItem innerDivStyle={{padding: 0}} >
                            <nav className="SideNav">
                                <ul className="NavList">
                                    <li><NavLink className="Home" activeclassname="ActiveLink" exact
                                                 to="/">Home</NavLink></li>
                                    <li><NavLink className="Workflow" activeclassname="ActiveLink" to="/workflow">Workflow</NavLink>
                                    </li>
                                    <li><NavLink className="Statistics" activeclassname="ActiveLink" to="/statistics">Statistics</NavLink>
                                    </li>
                                    <li><NavLink className="Calendar" activeclassname="ActiveLink" to="/calendar">Calendar</NavLink>
                                    </li>
                                    <li><NavLink className="User" activeclassname="ActiveLink"
                                                 to="/users">Users</NavLink></li>
                                    <li><NavLink className="Settings" activeclassname="ActiveLink" to="/settings">Settings</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </MenuItem>
                    </Drawer>
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