import React from 'react';

import './InfoSalesCard.css';

//components
import HomeSortPanel from "../molecules/HomeSortPanel";
import GeneralSales from "../molecules/GeneralSales";

class InfoSalesCard extends React.Component {
    render() {
        return (
            <div className="InfoSalesCard">
                <HomeSortPanel category="Your Sales" data={this.props.data}/>
                <GeneralSales/>
            </div>
        )
    }
}

export default InfoSalesCard;