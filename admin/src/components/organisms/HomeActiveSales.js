import React from 'react';

import './HomeActiveSales.css';

//img
import GraphLayout from '../../assets/img/graph-layout.png';
import GraphBlue from '../../assets/img/graph-blue.png';

//components
import HomeSortPanel from "../molecules/HomeSortPanel";

class HomeActiveSales extends React.Component {
    render () {
        return(
            <div className="HomeActiveSales">
                <HomeSortPanel category="Report"/>
                <div className="GraphImg">
                    <img className="GraphLayout" src={GraphLayout} alt="GraphLayout"/>
                    <img className="GraphState" src={GraphBlue} alt="GraphState"/>
                </div>
            </div>
        )
    }
}

export default HomeActiveSales;