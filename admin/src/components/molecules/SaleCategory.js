import React from 'react';
import {Circle} from 'rc-progress';

import './SaleCategory.css';


class ProgressRing extends React.Component {
    render() {
        return (
            <li className="SaleCategory">
                <div className="ProgressRing">
                    <Circle percent={this.props.data.percent} strokeWidth="10" strokeColor={this.props.data.color}
                            trailWidth="10" trailColor="#dbdce7" gapPosition="bottom"/>
                    <p className="StatusPercent"
                       style={{color: this.props.data.color}}>{this.props.data.percent + "%"}</p>
                </div>
                <div className="SaleInfoCategory">
                    <p className="SalePrice">
                        {this.props.data.price}
                    </p>
                    <p className="SaleCategoryName">
                        {this.props.data.category}
                    </p>
                </div>
            </li>
        )
    }
}

export default ProgressRing;