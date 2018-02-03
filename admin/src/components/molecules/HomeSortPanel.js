import React from 'react';

import './HomeSortPanel.css';

class HomeSortPanel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="HomeSortPanel">
                <p className="CategoryPanel">{this.props.category}</p>
                <select>
                    <option required>Period: Last Year</option>
                    <option>Period: Last Month</option>
                    <option>Period: Last Week</option>
                </select>
            </div>
        )
    }
}

export default HomeSortPanel;