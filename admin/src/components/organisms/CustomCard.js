import React from 'react';
import TaskName from "../atoms/TaskName";
import DetailButton from "../atoms/Buttons/DetailButton";

import './CustomCard.css';

const data = {
    lanes: [
        {
            id: 'lane1',
            header: 'To Do',
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
            header: 'In Progress',
            label: '()',
            cards: [
                {id: 'Task7', title: 'New logo for Apple', description: '', label: '1 days left'},
                {id: 'Task8', title: 'Daily UI Kit', description: '', label: '5 days left'},
                {id: 'Task9', title: 'Business Cards', description: '', label: '2 days delays', delay: 'delay'}
            ]
        },
        {
            id: 'lane3',
            header: 'Completed',
            label: '()',
            cards: [
                {id: 'Task10', title: 'Free PSD Template vol. 1', description: '', label: 'Completed', done: true},
                {id: 'Task11', title: 'Iconset Vol. 1', description: '', label: 'Completed', done: true},
                {id: 'Task12', title: 'New website for Symu.co', description: '', label: 'Completed'},
                {id: 'Task13', title: 'Iconset vol. 2', description: '', label: 'Completed', done: true},
            ]
        }
    ]
};


const CustomCard = data =>  {

        return (
                <div className="CardItem">
                    <div className="CardContent">
                        <TaskName data={data}/>
                        <div className="CardContentDetail">
                            <p className="Title">{data.title}</p>
                            <p className={ data.label === 'Completed' ? 'ToDoTime ToDoComplete' : 'ToDoTime'}>{data.label}</p>
                        </div>
                    </div>
                    <DetailButton/>
                </div>

        )
};



export default CustomCard;
