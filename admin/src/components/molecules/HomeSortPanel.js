import React from 'react';

import './HomeSortPanel.css';

//components
import Select from "../atoms/Select";

class HomeSortPanel extends React.Component {
    render() {
        return(
            <div className="HomeSortPanel">
                <p className="CategoryPanel">{this.props.category}</p>
                <Select data={this.props.data}/>
            </div>
        )
    }
}

export default HomeSortPanel;