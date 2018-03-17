import React from 'react';
import ReactHighcharts from 'react-highcharts';

import './InfoSalesCard.css';

import HomeChartConfig from '../../config/HomeChartConfig';


class InfoSalesCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            salesData: [],
            value: 'Last year'
        }
    }

    componentWillMount() {
        fetch('/api/sales/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    salesData: res
                });
                let salesArr = this.state.salesData;
                let sum = 0;
                for (let index in salesArr) {
                    for (let salesArrIndex in salesArr[index]) {
                        sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                            salesArr[index][salesArrIndex] : 0;
                    }
                }
                let chart = this.salesChart.getChart();
                chart.series[0].setData(this.state.salesData, true);
                chart.redraw();
                chart.setTitle({text: sum});
            });
    }

    componentWillUpdate() {
        if (this.state.value === 'Last year') {
            fetch('/api/sales/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.redraw();
                    chart.setTitle({text: sum});
                });
        }
        else if (this.state.value === 'Last month') {
            fetch('/api/sales/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.setTitle({text: sum});
                });
        }
        else if (this.state.value === 'Last week') {
            fetch('/api/sales/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.setTitle({text: sum});
                });
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value});
        if (e.target.value === 'Last year') {
            fetch('/api/sales/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        salesData: res
                    });
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.redraw();
                    chart.setTitle({text: sum});
                });
        }
        else if (e.target.value === 'Last month') {
            fetch('/api/sales/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        salesData: res
                    });
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.setTitle({text: sum});
                });
        }
        else if (e.target.value === 'Last week') {
            fetch('/api/sales/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        salesData: res
                    });
                    let salesArr = this.state.salesData;
                    let sum = 0;
                    for (let index in salesArr) {
                        for (let salesArrIndex in salesArr[index]) {
                            sum += (typeof salesArr[index][salesArrIndex] === "number") ?
                                salesArr[index][salesArrIndex] : 0;
                        }
                    }
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                    chart.setTitle({text: sum});
                });
        }
    };

    render() {
        return (
            <div className="InfoSalesCard">
                <div className="HomeSortPanel">
                    <p className="CategoryPanel">Sales</p>
                    <select onChange={this.handleChange} value={this.state.value}>
                        {
                            this.props.data && this.props.data.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <ReactHighcharts config={HomeChartConfig.SalesChart} ref={(chart) => {
                    this.salesChart = chart;
                }}/>
            </div>
        )
    }
}

export default InfoSalesCard;