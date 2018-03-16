import React from 'react';
import Board from 'react-trello';


import './Workflow.css';


//components
import ToDoListItem from '../organisms/ToDoListItem';

const ToDoData = [
    {
        _id: '1',
        title: 'New website for JCD.pl',
        timelabel: '5 days left'
    },
    {
        _id: '2',
        title: 'Free PSD Template vol. 3',
        timelabel: '5 days left'
    },
    {
        _id: '3',
        title: 'New logo for Google',
        timelabel: '5 days left'
    },
    {
        _id: '4',
        title: 'New website for Windu.org',
        timelabel: '5 days left'
    },
    {
        _id: '5',
        title: 'Free PSD Template vol. 2',
        timelabel: '5 days left'
    },
    {
        _id: '6',
        title: 'Iconset Vol. 3',
        timelabel: '5 days left'
    }
];

const InProgressData = [
    {
        _id: '1',
        title: 'New logo for Apple',
        timelabel: '1 days left'
    },
    {
        _id: '2',
        title: 'Daily UI Kit',
        timelabel: '5 days left'
    },
    {
        _id: '3',
        title: 'Business Cards',
        timelabel: '2 days delays',
        delay: true
    }
];

const CompletedData = [
    {
        _id: '1',
        title: 'Free PSD Template vol. 1',
        timelabel: 'Completed!',
        done: true
    },
    {
        _id: '2',
        title: 'Iconset vol. 1',
        timelabel: 'Completed!',
        done: true
    },
    {
        _id: '3',
        title: 'New website for Symu.co',
        timelabel: 'Completed!',
        done: true
    },
    {
        _id: '4',
        title: 'Iconset vol. 2',
        timelabel: 'Completed!',
        done: true
    }
];

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'To Do',
            label: '()',
            cards: [
                {id: 'Task1', title: 'New website for JCD.pl', description: '', label: '5 days left'},
                {id: 'Task2', title: 'Free PSD Template vol. 3', description: '', label: '5 days left'},
                {id: 'Task3', title: 'New logo for Google', description: '', label: '5 days left'},
                {id: 'Task4', title: 'New website for Windu.org', description: '', label: '5 days left'},
                {id: 'Task5', title: 'Free PSD Template vol. 2', description: '', label: '5 days left'},
                {id: 'Task6', title: 'Iconset Vol. 3', description: '', label: '5 days left'}
            ]
        },

        {
            id: 'lane2',
            title: 'In Progress',
            label: '()',
            cards: [
                {id: 'Task7', title: 'New logo for Apple', description: '', label: '1 days left'},
                {id: 'Task8', title: 'Daily UI Kit', description: '', label: '5 days left'},
                {id: 'Task9', title: 'Business Cards', description: '', label: '2 days delays'}
            ]
        },
        {
            id: 'lane3',
            title: 'Completed',
            label: '()',
            cards: [
                {id: 'Task10', title: 'Free PSD Template vol. 1', description: '', label: 'Completed'},
                {id: 'Task11', title: 'Iconset Vol. 1', description: '', label: 'Completed'},
                {id: 'Task12', title: 'New website for Symu.co', description: '', label: 'Completed'},
                {id: 'Task13', title: 'Iconset vol. 2', description: '', label: 'Completed'},
            ]
        }
    ]
};

class Workflow extends React.Component {

    render () {
        return (
            <section className="WorkflowPage">
            <Board data={data} draggable  style={
                {
                    background: 'transparent',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-around'
                }
            }>
            </Board>

            </section>
        )
    }
}

/*
               <div className="ToDoCategory">
               <p className="Category">To Do <span>({ToDoData.length})</span></p>
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
                   <p className="Category">In Progress <span>({InProgressData.length})</span></p>
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
                   <p className="CategoryCompleted">Completed <span>({CompletedData.length})</span></p>
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
               */

export default Workflow;