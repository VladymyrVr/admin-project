import React from 'react';

import './UserListItem.css';

//components
import DetailButton from '../atoms/Buttons/DetailButton';

class UsersListItem extends React.Component {


    render() {
        return (
            <li key={this.props.data.id}>
                <ul className="UsersListInfo">
                    <li className={this.props.data.title ? "TitleName UserName" : "UserName"}>
                        <div className="ImgWrapper ">
                            <p className={ this.props.data.isOnline ? "OnlineStatus" : null}></p>
                            <img src={this.props.data.src} alt={this.props.data.name}/>
                        </div>
                        <div className="UserInfo">
                            <p className="Name">{this.props.data.name}</p>
                            <p className="Position">{this.props.data.position}</p>
                        </div>
                    </li>
                    <li className={this.props.data.title ? "TitleActivity ActivityInfo" : "ActivityInfo"}>
                        <p className={this.props.data.isOnline ? "Online" : "Offline"}>
                            {this.props.data.activity}
                        </p>
                    </li>
                    <li className={this.props.data.title ? "TitleMail MailInfo" : "MailInfo"}>
                        <p>{this.props.data.mail}</p>
                    </li>
                    <li className={this.props.data.title ? "TitlePhone PhoneInfo" : "PhoneInfo"}>
                        <p>{this.props.data.phone}</p>
                    </li>
                    <li className="DetailInfo">
                        <DetailButton/>
                    </li>
                </ul>
            </li>
        )
    }
}

export default UsersListItem;