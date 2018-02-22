import React from 'react';
import ReactHighcharts from 'react-highcharts';

import './InfoSalesCard.css';

import SalesChart from '../../config/pieChart.config';



class InfoSalesCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            salesData: []
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
                let chart = this.salesChart.getChart();
                chart.series[0].setData(this.state.salesData, true);
            });
    }

    handleChange = (e) => {
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
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
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
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
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
                    let chart = this.salesC  <Select data={this.props.data}/>hart.getChart();
                    chart.series[0].setData(this.state.salesData, true);
                });
        }
    };

    render() {
        return (
            <div className="InfoSalesCard">
                <div className="HomeSortPanel">
                    <p className="CategoryPanel">Sales</p>
                    <select onChange={this.handleChange}>
                        {
                            this.props.data && this.props.data.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <ReactHighcharts config={SalesChart} ref={(chart) => {
                    this.salesChart = chart;
                }}/>
            </div>
        )
    }
}

export default InfoSalesCard;