import React from 'react';
import ReactHighcharts from 'react-highcharts';

import './HomeActiveSales.css';

import HomeChartConfig from '../../config/HomeChartConfig';

class HomeActiveSales extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reportData: []
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
                    reportData: res.ReportSalesLastYear
                });
                let chart = this.reportChart.getChart();
                chart.series[0].setData(this.state.reportData, true);
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
                        reportData: res.ReportSalesLastYear
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
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
                        reportData: res.ReportSalesLastMonth
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
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
                        reportData: res.ReportSalesLastWeek
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
                });
        }

    };

    render() {
        return (
            <div className="HomeActiveSales">
                <div className="HomeSortPanel">
                    <p className="CategoryPanel">Report</p>
                    <select onChange={this.handleChange}>
                        {
                            this.props.data && this.props.data.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                <ReactHighcharts config={HomeChartConfig.ReportChart} ref={(chart) => {
                    this.reportChart = chart;
                }}/>
            </div>
        )
    }
}

export default HomeActiveSales;