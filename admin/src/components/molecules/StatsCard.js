import React from 'react';

import './StatsCard.css';


class StatsCard extends React.Component {

    render() {
        return(
                <li className="StatsCard">
                    <div className="ShortInfoStats">
                    <p className="ValueStats">{}</p>
                    <p className="TypeStats">{this.props.data.type}</p>
                    </div>
                    <div className="GraphImg">
                        <img src={ this.props.data.img } alt="Graphic of Sales"/>
                    </div>
                </li>
        )
    }
}

export default StatsCard;