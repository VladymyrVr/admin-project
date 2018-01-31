import React from 'react';

import './UserListItem.css';

class UsersListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li key={this.props.data.id}>
                <ul className="UsersListInfo">
                    <li className="UserName">
                        <div className="ImgWrapper ">
                            <p className={ this.props.data.isOnline ? "OnlineStatus" : null}></p>
                            <img src={this.props.data.src} alt={this.props.data.name}/>
                        </div>
                        <div className="UserInfo">
                            <p className="Name">{this.props.data.name}</p>
                            <p className="Position">{this.props.data.position}</p>
                        </div>
                    </li>
                    <li className="ActivityInfo">
                        <p className={this.props.data.isOnline ? "Online" : "Offline"}>
                            {this.props.data.activity}
                        </p>
                    </li>
                    <li className="MailInfo">
                        <p>{this.props.data.mail}</p>
                    </li>
                    <li className="PhoneInfo">
                        <p>{this.props.data.phone}</p>
                    </li>
                    <li className="DetailInfo">
                        <button className="DetailButton"></button>
                    </li>
                </ul>
            </li>
        )
    }
}

export default UsersListItem;