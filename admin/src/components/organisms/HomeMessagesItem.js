import React from 'react';

import './HomeMessagesItem.css';

//components
import HomeHeaderPanel from "../atoms/HomeHeaderPanel";
import Messages from "./Messages";

const MessagesData = [
    {
        id: '1',
        img: 'img/Users/nina.png',
        name: 'Nina Jones',
        timeStatus: '5 minutes ago',
        content: 'Hey You! It’s me again :-) I attached new (...)',
        unread: true
    },
    {
        id: '2',
        img: 'img/Users/nina.png',
        name: 'Nina Jones',
        timeStatus: 'About 20 hours ago',
        content: 'Hey! I attached some new PSD files for (...)',
        unread: true
    },
    {
        id: '3',
        img: 'img/Users/john.png',
        name: 'James Smith',
        timeStatus: '2 days ago',
        content: 'Good morning, you are fired!',
        unread: false
    },
    {
        id: '4',
        img: 'img/Users/nina.png',
        name: 'Nina Jones',
        timeStatus: 'About 2 weeks ago',
        content: 'Hello! Could You bring me coffee please?',
        unread: false
    }
];


class HomeMessagesItem extends React.Component {
    render() {
        return (
            <li className="HomeMessagesItem">
                <HomeHeaderPanel title="Messages" count="2" delay={false} />
                <ul className="MessagesList">
                    {
                        MessagesData.map(item => {
                            return (
                                <Messages data={item} key={item.id} />
                            )
                    })
                    }
                </ul>
            </li>
        )
    }
}

export default HomeMessagesItem;