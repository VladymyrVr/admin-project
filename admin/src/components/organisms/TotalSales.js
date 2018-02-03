import React from 'react';

import './TotalSales.css';

//component
import ControlPanel from '../molecules/ControlPanel';
import SaleCategory from "../molecules/SaleCategory";

const SalesCategoryData = [
    {
        id: "1",
        percent: "45",
        color: "#7950ff",
        price: "2,300$",
        category: "Direct Sales"
    },
    {
        id: "2",
        percent: "20",
        color: "#b92bb8",
        price: "980$",
        category: "Channel Sales"
    },
    {
        id: "3",
        percent: "25",
        color: "#ff0075",
        price: "1250$",
        category: "Channel Sales"
    }
];

class TotalSales extends React.Component {

    render() {
        return (
            <section className="TotalSales">
                <div className="PaddingWrapper">
                    <div className="ActiveTotalPanel">
                        <h3>Total sales</h3>
                        <ControlPanel/>
                    </div>
                    <ul className="TotalSalesList">
                        {
                            SalesCategoryData.map(item => {
                                return (
                                    <SaleCategory data={item} key={item.id}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default TotalSales;