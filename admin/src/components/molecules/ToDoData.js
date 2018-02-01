import React from 'react';

import './ToDoData.css';

//components
import TaskName from "../atoms/TaskName";

class ToDoData extends React.Component {

    render () {

        let TimeStatus;
        if (this.props.data.delay) {
            TimeStatus = ("ToDoTimeDelay")
        } else if (this.props.data.done) {
            TimeStatus = ("ToDoComplete")
        } else {
            TimeStatus = ("ToDoTime")
        }

        return (
            <div className="ToDoData">
                <TaskName data={this.props.data} />
                <div className="DataContent">
                    <p className="ToDoTitle">{this.props.data.title}</p>
                    <p className={TimeStatus}>{this.props.data.timeStatus}</p>
                </div>
            </div>
        )
    }
}

export default ToDoData;