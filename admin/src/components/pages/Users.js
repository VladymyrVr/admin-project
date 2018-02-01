import React from 'react';

import './Users.css';

//components
import UsersListItem from '../organisms/UsersListItem';
import NavPages from "../molecules/NavPages";

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
    }
];


class Users extends React.Component {

    render() {
        return (
            <section className="Users">
                <div className="UserStatus">
                    <p className="UsersGeneral">Users <span>(128)</span></p>
                    <select>
                        <option required>Active first</option>
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                </div>
                <ul className="UsersList">
                    {
                        UserListData.map(item => {
                            return (
                                <UsersListItem data={item} key={item.id}/>
                            )
                        })
                    }
                </ul>
                <NavPages/>

            </section>
        )
    }
}

export default Users;