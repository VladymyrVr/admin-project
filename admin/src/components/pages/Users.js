import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './Users.css';


const UserListData = [
    {
        id: '1',
        src: "img/Users/john.png",
        name: "John Doe",
        position: "CEO",
        activity: "Online now!",
        mail: "johndoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: true,
        title: true
    },
    {
        id: '2',
        src: "img/Users/nina.png",
        name: "Nina Jones",
        position: "UX Designer",
        activity: "Online now!",
        mail: "ninajones@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '3',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '4',
        src: "img/Users/anna.png",
        name: "Ann Clooney",
        position: "Account Manager",
        activity: "20 minutes ago",
        mail: "annclooney@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '5',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '6',
        src: "img/Users/nicky.png",
        name: "Nicky Hunt",
        position: "Product Designer",
        activity: "1 hour ago",
        mail: "nickyhunt@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '7',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '8',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '9',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '10',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '11',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '12',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '13',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '14',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '15',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '16',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '17',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '18',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '19',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '20',
        src: "img/Users/jane.png",
        name: "Jane Doe",
        position: "Graphic Designer",
        activity: "2 days ago",
        mail: "janedoe@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '21',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '22',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '23',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '24',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '25',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '26',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '27',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '28',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '29',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '30',
        src: "img/Users/alex.png",
        name: "Alex Smith",
        position: "Web Designer",
        activity: "Online now!",
        mail: "alexsmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: true
    },
    {
        id: '31',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '32',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '33',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '34',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '35',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '36',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '37',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '38',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '39',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '40',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '41',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '42',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '43',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '44',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '45',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '46',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '47',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '48',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },
    {
        id: '49',
        src: "img/Users/patrick.png",
        name: "Patrick Smith",
        position: "Project Manager",
        activity: "40 minutes ago",
        mail: "patricksmith@design.com",
        phone: "(000) 111 222 333",
        isOnline: false
    },

];

const SelectUsersData = [ 'All Users', 'Online only', 'Offline only'];

let usersOnline = UserListData.filter((item) => {
    if (item.isOnline === true) {
        return item;
    }
});


let usersOffline = UserListData.filter((item) => {
    if (item.isOnline === false) {
        return item;
    }
});

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            usersList: UserListData
        };
    }

    handleOpen = (e) => {
        e.preventDefault();
        this.setState({
            open: true,
            anchorEl: e.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    onHandleChange = (e) => {
        if(e.target.value === 'Online only') {
            this.setState({
                usersList: usersOnline
            });
            console.log(this.state.usersList)
        }
        else if (e.target.value === 'Offline only') {
            this.setState({
                usersList: usersOffline
            });
            console.log(this.state.usersList)
        }
        else if (e.target.value === 'All Users') {
            this.setState({
                usersList: UserListData
            });
        }
    };






    ProfileWrap = (cell, row) => {
        return (
            <div className="UsersTableTableCell align-items-center">
                <div className="ProfileInfoWrap">
                    <p className={row.isOnline ? "Online" : "Offline"}></p>
                    <div className="ProfilePhotoWrap">
                        <img src={row.src} alt=""/>
                    </div>
                </div>
                <div>
                    <span className="ProfileName">{row.name}</span>
                    <span className="ProfileProf">{row.position}</span>
                </div>
            </div>
        )
    };

    Activity = (cell, row) => {
        return (
            <div className="UsersTableTableCell">
                <p className={row.activity === 'Online now!' ? "ActivityStatus OnlineActive" : "ActivityStatus" +
                    " OfflineActive"}>
                    {row.activity === 'Online now!' ? "Online now!" : row.activity}
                </p>
            </div>
        )
    };

    Email = (cell, row) => {
        return (
            <div className="UsersTableTableCell">
                <a className="email" href="mailto:">{row.mail}</a>
            </div>
        )
    };

    TelNumber = (cell, row) => {
        return (
            <div className="UsersTableTableCell">
                <a className="tel" href="">{row.phone}</a>
            </div>
        )
    };

    DropDownMenu = () => {
        return (
            <MuiThemeProvider>
                <div className="UsersTableTableCell Menu">
                    <button className="DetailButton" onClick={this.handleOpen}></button>
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                    >
                        <Menu>
                            <MenuItem primaryText="Send Task"/>
                            <MenuItem primaryText="Send Message"/>
                            <MenuItem primaryText="Delete Message"/>
                            <MenuItem primaryText="Set primary"/>
                        </Menu>
                    </Popover>
                </div>
            </MuiThemeProvider>
        )
    };

    render() {


        const options = {
            sizePerPage: 7,
            hideSizePerPage: true,
            sizePerPageList: [5, 10, 15]
        };



        return (

            <section className="Users">
                <div className="UserStatus">
                    <p className="UsersGeneral">Users <span>({this.state.usersList.length})</span></p>
                    <select onChange={this.onHandleChange}>
                        {
                            SelectUsersData.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <BootstrapTable
                    data={this.state.usersList}
                    tableStyle={{border: 'none'}}
                    options={options}
                    pagination
                    tableBodyClass='UsersTable-Body'>

                    <TableHeaderColumn
                        width="360"
                        dataField='name'
                        thStyle={{border: 'none'}}
                        dataFormat={this.ProfileWrap}
                        isKey>Name
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        width="300"
                        thStyle={{border: 'none'}}
                        dataFormat={this.Activity}
                        dataField='activity'
                    >Last activity</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='mail'
                        dataFormat={this.Email}
                        width="300"
                        thStyle={{border: 'none'}}
                    >Mail
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='phone'
                        width="300"
                        dataFormat={this.TelNumber}
                        thStyle={{border: 'none'}}>
                        Phone
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='menu'
                        thStyle={{border: 'none'}}
                        width="150"
                        dataFormat={this.DropDownMenu}>
                    </TableHeaderColumn>
                </BootstrapTable>
            </section>

        )
    }
}


export default Users;