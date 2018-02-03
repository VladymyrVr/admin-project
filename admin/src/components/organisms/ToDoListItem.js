import React from 'react';

import './ToDoListItem.css';

//components
import ToDoData from "../molecules/ToDoData";
import DetailButton from '../atoms/Buttons/DetailButton';

class ToDoListItem extends React.Component {
    render () {
        return (
            <li className="ToDoListItem">
                <ToDoData data={this.props.data} />
                <DetailButton  data={this.props.data} />
            </li>
        )
    }
}

export default ToDoListItem;