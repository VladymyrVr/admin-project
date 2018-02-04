import React from 'react';

import './GeneralSales.css';

import SalesImg from '../../assets/img/general-sales.png';


class GeneralSales extends React.Component {
    render() {
        return(
            <div className="GeneralSales">
                <img src={SalesImg} alt="General Sales"/>
                <ul>
                    <li className="Websites">Websites</li>
                    <li className="LogoGeneral">Logo</li>
                    <li className="SocialMedia">Social Media</li>
                    <li className="Adwords">Adwords</li>
                    <li className="ECommerce">E-Commerce</li>
                </ul>
            </div>
        )
    }
}

export default GeneralSales;