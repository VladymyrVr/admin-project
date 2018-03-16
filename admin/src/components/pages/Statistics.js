import React from 'react';
import ReactHighcharts from 'react-highcharts';

import StatisticChartConfig from '../../config/StatisticChartConfig';


import './Statistics.css';

//components
import StatsCard from "../molecules/StatsCard";
import TotalSales from "../organisms/TotalSales";
import ControlPanel from "../molecules/ControlPanel";

const StatsData = [
    {
        _id: '1',
        type: 'Sales',
        img: 'img/sales-graph.png'
    },
    {
        _id: '2',
        type: 'Views',
        img: 'img/views-graph.png'
    }
];

const SelectData = ['Last year', 'Last month', 'Last week'];


class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeData: [],
            sales: ''
        }
    }

    componentWillMount() {
        fetch('/api/report/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    activeData: res,
                    sales: sum
                });
                let chart = this.activeChart.getChart();
                let salesArr = this.state.activeData;
                let sum = 0;
                for (let index in salesArr) {
                    for (let salesArrIndex in salesArr[index]) {
                        sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                            salesArr[index][salesArrIndex] : 0;
                    }
                }
                chart.series[0].setData(this.state.activeData, true);
            });
    }

    handleChange = (e) => {
        if (e.target.value === 'Last year') {
            fetch('/api/report/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        activeData: res,
                        sales: sum
                    });
                    let salesArr = this.state.activeData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.activeChart.getChart();
                    chart.series[0].setData(this.state.activeData, true);
                });
        }
        else if (e.target.value === 'Last month') {
            fetch('/api/report/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        activeData: res
                    });
                    let chart = this.activeChart.getChart();
                    chart.series[0].setData(this.state.activeData, true);
                });
        }
        else if (e.target.value === 'Last week') {
            fetch('/api/report/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        activeData: res
                    });
                    let chart = this.activeChart.getChart();
                    chart.series[0].setData(this.state.activeData, true);
                });
        }

    };

    render() {
        return (
            <section className="StatisticsPage">
                <div className="StatisticControlPanel">
                    <p>Stats</p>
                    <div className="SelectPanels">
                        <select onChange={this.handleChange}>
                            {
                                SelectData && SelectData.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })
                            }
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
                                    <StatsCard data={item} key={item._id} />
                                )
                            })
                        }
                    </ul>
                    <div className="ActiveUsers">
                        <div className="ActiveUsersPanel">
                            <h3>Active Users</h3>
                            <ControlPanel/>
                        </div>
                        <ReactHighcharts config={StatisticChartConfig.ActiveUsersChart} ref={(chart) => {
                            this.activeChart = chart;
                        }}/>
                    </div>
                </div>
                <TotalSales/>
            </section>
        )
    }
}

export default Statistics;