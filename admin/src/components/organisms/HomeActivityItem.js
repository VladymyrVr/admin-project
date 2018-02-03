import React from 'react';

import './HomeActivityItem.css';

//components
import HomeHeaderPanel from "../atoms/HomeHeaderPanel";
import Activity from "../molecules/Activity";

const ActivityData = [
    {
        id: '1',
        img: 'img/Users/nina.png',
        name: 'Nina Jones',
        action: 'added a new project',
        task: 'Free UI Kit',
        time: 'Just now'
    },
    {
        id: '2',
        img: 'img/Users/john.png',
        name: 'James Smith',
        action: 'commented project',
        task: 'Free PSD Teamplate',
        time: '40 minutes ago'
    },
    {
        id: '3',
        img: 'img/Users/alex.png',
        name: 'Alex Clooney',
        action: 'commented task',
        task: 'Symu Website',
        time: '1 hour ago'
    },
    {
        id: '4',
        img: 'img/Users/anna.png',
        name: 'Alexandra Spears',
        action: 'added a new project ',
        task: 'Free PSD(...)',
        time: '3 hours ago'
    }
];

class HomeActivityItem extends React.Component {
    render() {
        return (
            <li className="HomeActivityItem">
                <HomeHeaderPanel title="Activity" count="10" delay={false}/>
                <ul className="ActivityList">
                    {
                        ActivityData.map(item => {
                            return (
                                <Activity data={item} key={item.id} />
                            )
                        })
                    }
                </ul>
            </li>
        )
    }
}

export default HomeActivityItem;