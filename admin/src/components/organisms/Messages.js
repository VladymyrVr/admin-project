import React from 'react';

import './Messages.css';

//components
import MessagesGroupButton from "../molecules/MessagesGroupButton";

class Messages extends React.Component {
    render() {
        return (
            <li className={this.props.data.unread ? "Messages UnRead" : "Messages Read"}>
                <div className="AvatarWrapper">
                    <img src={this.props.data.img} alt={this.props.data.name}/>
                </div>
                <div className="MessagesBlock">
                    <div className="InfoAboutPerson">
                        <p className="MessagesPersonName">{this.props.data.name}</p>
                        <p className="MessagesTimeStatus">{this.props.data.timeStatus}</p>
                    </div>
                    <p className="MessagesContent">{this.props.data.content}</p>
                    <MessagesGroupButton/>
                </div>
            </li>
        )
    }
}

export default Messages;