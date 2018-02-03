import React from 'react';

import './MessagesGroupButton.css';

//components
import BackButton from "../atoms/Buttons/BackButton";
import SettingButton from "../atoms/Buttons/SettingButton";


class MessagesGroupButton extends React.Component {
    render() {
        return (
            <div className="MessagesGroupButton">
                <BackButton/>
                <SettingButton/>
            </div>
        )
    }
}

export default MessagesGroupButton;