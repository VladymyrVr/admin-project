import React from 'react';

import './Workflow.css';

//components
import ToDoListItem from '../organisms/ToDoListItem';

const ToDoData = [
    {
        _id: '1',
        title: 'New website for JCD.pl',
        timeStatus: '5 days left'
    },
    {
        _id: '2',
        title: 'Free PSD Template vol. 3',
        timeStatus: '5 days left'
    },
    {
        _id: '3',
        title: 'New logo for Google',
        timeStatus: '5 days left'
    },
    {
        _id: '4',
        title: 'New website for Windu.org',
        timeStatus: '5 days left'
    },
    {
        _id: '5',
        title: 'Free PSD Template vol. 2',
        timeStatus: '5 days left'
    },
    {
        _id: '6',
        title: 'Iconset Vol. 3',
        timeStatus: '5 days left'
    }
];

class Workflow extends React.Component {
    render () {
        return (
            <section className="WorkflowPage">
                <ul className="ToDoList">
                    {
                        ToDoData.map(item => {
                            return (
                                <ToDoListItem data={item} key={item._id}/>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default Workflow;