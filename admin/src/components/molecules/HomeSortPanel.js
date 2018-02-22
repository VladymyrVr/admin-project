import React from 'react';

import './HomeSortPanel.css';


class HomeSortPanel extends React.Component {
    render() {
        return(
            <div className="HomeSortPanel">
                <p className="CategoryPanel">{this.props.category}</p>

            </div>
        )
    }
}

export default HomeSortPanel;