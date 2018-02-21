import React from 'react';
import ReactHighcharts from 'react-highcharts';


//config
import SalesChart from '../../config/pieChart.config';


class GeneralSales extends React.Component {
    render() {
        return(
            <div className="GeneralSales">
               <ReactHighcharts config={SalesChart}/>
            </div>
        )
    }
}

export default GeneralSales;