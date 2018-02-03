import React from 'react';

import './ActiveUsers.css';

//img
import GraphLayout from '../../assets/img/graph-layout.png';

//components
import ControlPanel from "../molecules/ControlPanel";


class ActiveUsers extends React.Component {
    render() {
        return (
            <div className="ActiveUsers">
                <div className="ActiveUsersPanel">
                    <h3>Active Users</h3>
                    <ControlPanel/>
                </div>
                <div className="GraphWrapper">
                    <img src={GraphLayout} alt="Graph Layout"/>
                </div>
            </div>
        )
    }
}

export default ActiveUsers;