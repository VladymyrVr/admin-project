import React from 'react';

import './Statistics.css';

//components
import StatsCard from "../molecules/StatsCard";
import ActiveUsers from "../organisms/ActiveUsers";
import TotalSales from "../organisms/TotalSales";

const StatsData = [
    {
        _id: '1',
        value: '1560',
        type: 'Sales',
        img: 'img/sales-graph.png'
    },
    {
        _id: '2',
        value: '3230',
        type: 'Views',
        img: 'img/views-graph.png'
    }
];


class Statistics extends React.Component {
    render() {
        return (
            <section className="StatisticsPage">
                <div className="StatisticControlPanel">
                    <p>Lorem Ipsum Stats</p>
                    <div className="SelectPanels">
                        <select className="Period">
                            <option required>Period: Last Month</option>
                            <option>Period: Last week</option>
                            <option>Period: Last year</option>
                        </select>
                        <select className="Type">
                            <option required>Type: Notifications</option>
                            <option>Type: Messages</option>
                            <option>Type: News</option>
                        </select>
                    </div>
                </div>
                <div className="StatsInfo">
                    <ul className="StatsLIst">
                        {
                            StatsData.map(item => {
                                return (
                                    <StatsCard data={item} id={item._id}/>
                                )
                            })
                        }
                    </ul>
                    <ActiveUsers/>
                </div>
                <TotalSales/>
            </section>
        )
    }
}

export default Statistics;