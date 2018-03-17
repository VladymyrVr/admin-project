import React from 'react';
import { connect } from 'react-redux';

import './Settings.css';

//components

class Settings extends React.Component {
    render() {
        return (
            <section className={this.props.statusMenu === false || this.props.statusMenu === undefined ? "SettingsPage" : "SettingsPage SettingsPageActive"}>
                Settings
            </section>
        )
    }
}

const mapState = (state, props) => {
    return {
        statusMenu: state.status
    }
};

export default connect(mapState)(Settings);