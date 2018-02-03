import React from 'react';

import './Activity.css';

class Activity extends React.Component {
    render() {
        return (
            <li className="Activity">
                <div className="AvatarWrapper">
                    <img src={this.props.data.img} alt={this.props.data.name} title={this.props.data.name}/>
                </div>
                <div className="ActivityContent">
                    <div className="ActivityWrapper">
                        <p className="ActivityPersonName">{this.props.data.name}</p>
                        <p className="ActivityAction">{this.props.data.action}</p>
                        <p className="ActivityNameTask">{this.props.data.task}</p>
                    </div>
                    <p className="ActivityTime">{this.props.data.time}</p>
                </div>
            </li>
        )
    }
}

export default Activity;