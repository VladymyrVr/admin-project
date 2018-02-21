import React from 'react';

import './HomePage.css';

//components
import InfoSalesCard from "../organisms/InfoSalesCard";
import HomeActiveSales from "../organisms/HomeActiveSales";
import HomeTasksItem from "../organisms/HomeTasksItem";
import HomeMessagesItem from "../organisms/HomeMessagesItem";
import HomeActivityItem from "../organisms/HomeActivityItem";

const forSalesData = ['last year', 'last month', 'last week'];

class HomePage extends React.Component {
    render() {
        const userName = JSON.parse(localStorage.getItem("user"));
        return (
            <section className="HomePage">
                <h3>Hello {userName}</h3>
                <div className="FlexWrapper">
                    <InfoSalesCard data={forSalesData}/>
                    <HomeActiveSales/>
                </div>
                <ul className="HomeActiveLists">
                    <HomeTasksItem/>
                    <HomeMessagesItem/>
                    <HomeActivityItem/>
                </ul>
            </section>
        )
    }
}

export default HomePage;