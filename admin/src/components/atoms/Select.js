import React from 'react';

import './Select.css';

class Select extends React.Component {

    handleChange = (e) => {
        if(e.target.value === 'Last year' ){
            fetch('/api/sales/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    let salesData = res;
                    console.log(salesData);
                });
        }
        else if (e.target.value === 'Last month') {
            fetch('/api/sales/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    let salesData = res;
                    console.log(salesData);
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
                    let salesData = res;
                    let chart = this.salesChart.getChart();
                    chart.series[0].setData(salesData, true)
                });
        }
    };


    render() {
        return(
                <select onChange={this.handleChange}>
                    {
                        this.props.data && this.props.data.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }
                </select>
        )
    }
}

export default Select;