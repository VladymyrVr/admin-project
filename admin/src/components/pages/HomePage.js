import React from 'react';

import './HomePage.css';

//components
import InfoSalesCard from "../organisms/InfoSalesCard";
import HomeActiveSales from "../organisms/HomeActiveSales";
import HomeTasksItem from "../organisms/HomeTasksItem";
import HomeMessagesItem from "../organisms/HomeMessagesItem";
import HomeActivityItem from "../organisms/HomeActivityItem";

class HomePage extends React.Component {
    render() {
        return (
            <section className="HomePage">
                <h3>Hello <span>Yoyo</span>!</h3>
                <div className="FlexWrapper">
                    <InfoSalesCard/>
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