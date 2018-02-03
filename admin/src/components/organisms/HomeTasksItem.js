import React from 'react';

import './HomeTasksItem.css';

//components
import HomeHeaderPanel from "../atoms/HomeHeaderPanel";
import ToDoListItem from "./ToDoListItem";

const HomeTasksData = [
    {
        _id: '1',
        title: 'New website for Symu.co',
        timeStatus: '5 days delays',
        delay: true
    },
    {
        _id: '2',
        title: 'Free business PSD Template ',
        timeStatus: '2 days delays',
        delay: true
    },
    {
        _id: '3',
        title: 'New logo for JCD.pl',
        timeStatus: '5 days left',
        delay: false
    },
    {
        _id: '4',
        title: 'Free Icons Set vol. 3',
        timeStatus: '10 days left',
        delay: false
    }
];

class HomeTasksItem extends React.Component {
    render() {
        return (
            <li className="HomeTasksItem">
                <HomeHeaderPanel title="Tasks" count="5" delay={true} delayCount="2" />
                <ul className="HomeTasksList">
                    {
                        HomeTasksData.map(item => {
                            return (
                                <ToDoListItem data={item} key={item._id}/>
                            )
                        })
                    }
                </ul>
            </li>
        )
    }
}

export default HomeTasksItem;