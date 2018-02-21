import React from 'react';

import './Select.css';

class Select extends React.Component {

    handleChange = (e) => {
        console.log(e.target.value)
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
                    console.log(res.body)
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
                    console.log(res.body)
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
                    console.log(res.body)
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