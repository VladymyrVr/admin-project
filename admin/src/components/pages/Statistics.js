import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {connect} from 'react-redux';

import StatisticChartConfig from '../../config/StatisticChartConfig';


import './Statistics.css';

//components
import TotalSales from "../organisms/TotalSales";
import ControlPanel from "../molecules/ControlPanel";

const SelectData = ['Last year', 'Last month', 'Last week'];


class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeData: [],
            views: '',
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
                    activeData: res.ReportSalesLastYear,
                    sales: res.salesSum
                });
                let chart = this.activeChart.getChart();
                let salesArr = this.state.activeData;
                let sum = 0;
                for (let index in salesArr) {
                    sum += (typeof salesArr[index] === "number") ?
                        salesArr[index] : 0;
                }
                chart.series[0].setData(this.state.activeData, true);
                this.setState({
                    views: sum
                });
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
                        activeData: res.ReportSalesLastYear,
                        sales: res.salesSum
                    });
                    let chart = this.activeChart.getChart();
                    let salesArr = this.state.activeData;
                    let sum = 0;
                    for (let index in salesArr) {
                        sum += (typeof salesArr[index] === "number") ?
                            salesArr[index] : 0;
                    }
                    chart.series[0].setData(this.state.activeData, true);
                    this.setState({
                        views: sum
                    });
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
                        activeData: res.ReportSalesLastMonth,
                        sales: res.salesSum
                    });
                    let chart = this.activeChart.getChart();
                    let salesArr = this.state.activeData;
                    let sum = 0;
                    for (let index in salesArr) {
                        sum += (typeof salesArr[index] === "number") ?
                            salesArr[index] : 0;
                    }
                    chart.series[0].setData(this.state.activeData, true);
                    this.setState({
                        views: sum
                    });
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
                        activeData: res.ReportSalesLastWeek,
                        sales: res.salesSum
                    });
                    let chart = this.activeChart.getChart();
                    let salesArr = this.state.activeData;
                    let sum = 0;
                    for (let index in salesArr) {
                        sum += (typeof salesArr[index] === "number") ?
                            salesArr[index] : 0;
                    }
                    chart.series[0].setData(this.state.activeData, true);
                    this.setState({
                        views: sum
                    });
                });
        }

    };

    render() {
        return (
            <section
                className={this.props.statusMenu === false || this.props.statusMenu === undefined ? "StatisticsPage" : "StatisticsPage StatisticsPageActive"}>
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
                        <li className="StatsCard">
                            <div className="ShortInfoStats">
                                <p className="ValueStats">{this.state.sales}</p>
                                <p className="TypeStats">Sales</p>
                            </div>
                            <div className="GraphImg">
                                <img src='img/sales-graph.png' alt="Graphic of Sales"/>
                            </div>
                        </li>
                        <li className="StatsCard">
                            <div className="ShortInfoStats">
                                <p className="ValueStats">{this.state.views}</p>
                                <p className="TypeStats">Views</p>
                            </div>
                            <div className="GraphImg">
                                <img src='img/views-graph.png' alt="Graphic of views"/>
                            </div>
                        </li>
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

const mapState = (state, props) => {
    return {
        statusMenu: state.status
    }
};

export default connect(mapState)(Statistics);