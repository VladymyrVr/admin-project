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

const InProgressData = [
    {
        _id: '1',
        title: 'New logo for Apple',
        timeStatus: '1 days left'
    },
    {
        _id: '2',
        title: 'Daily UI Kit',
        timeStatus: '5 days left'
    },
    {
        _id: '3',
        title: 'Business Cards',
        timeStatus: '2 days delays',
        delay: true
    }
];

const CompletedData = [
    {
        _id: '1',
        title: 'Free PSD Template vol. 1',
        timeStatus: 'Completed!',
        done: true
    },
    {
        _id: '2',
        title: 'Iconset vol. 1',
        timeStatus: 'Completed!',
        done: true
    },
    {
        _id: '3',
        title: 'New website for Symu.co',
        timeStatus: 'Completed!',
        done: true
    },
    {
        _id: '4',
        title: 'Iconset vol. 2',
        timeStatus: 'Completed!',
        done: true
    }
];

class Workflow extends React.Component {
    render () {
        return (
            <section className="WorkflowPage">
                <div className="ToDoCategory">
                <p className="Category">To Do <span>(6)</span></p>
                <ul className="ToDoList">
                    {
                        ToDoData.map(item => {
                            return (
                                <ToDoListItem data={item} key={item._id}/>
                            )
                        })
                    }
                </ul>
                </div>
                <div className="ToDoInProgress">
                    <p className="Category">In Progress <span>(3)</span></p>
                    <ul className="InProgressList">
                        {
                            InProgressData.map(item => {
                                return (
                                    <ToDoListItem data={item} key={item._id}/>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="ToDoCompleted">
                    <p className="CategoryCompleted">Completed <span>(4)</span></p>
                    <ul className="CompletedList">
                        {
                            CompletedData.map(item => {
                                return (
                                    <ToDoListItem data={item} key={item._id}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default Workflow;