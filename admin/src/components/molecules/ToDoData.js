import React from 'react';

import './ToDoData.css';

//components
import TaskName from "../atoms/TaskName";

class ToDoData extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="ToDoData">
                <TaskName data={this.props.data} />
                <div className="DataContent">
                    <p className="ToDoTitle">{this.props.data.title}</p>
                    <p className="ToDoTime">{this.props.data.title}</p>
                </div>
            </div>
        )
    }
}

export default ToDoData;