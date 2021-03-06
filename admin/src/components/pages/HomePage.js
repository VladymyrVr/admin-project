import React from 'react';
import { connect } from 'react-redux';

import './HomePage.css';

//components
import InfoSalesCard from "../organisms/InfoSalesCard";
import HomeActiveSales from "../organisms/HomeActiveSales";
import HomeTasksItem from "../organisms/HomeTasksItem";
import HomeMessagesItem from "../organisms/HomeMessagesItem";
import HomeActivityItem from "../organisms/HomeActivityItem";

const forSalesData = ['Last year', 'Last month', 'Last week'];

class HomePage extends React.Component {
    render() {
        const userName = JSON.parse(localStorage.getItem("user"));
        return (
            <section className={this.props.statusMenu === false || this.props.statusMenu === undefined ? "HomePage" : "HomePage HomePageActive"}>
                <h3>Hello {userName}</h3>
                <div className="FlexWrapper">
                    <InfoSalesCard data={forSalesData}/>
                    <HomeActiveSales data={forSalesData}/>
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

const mapState = (state, props) => {
    return {
        statusMenu: state.status
    }
};

export default connect(mapState)(HomePage);