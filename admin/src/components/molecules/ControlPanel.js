import React from 'react';

import './ControlPanel.css';

//components
import EditButton from "../atoms/Buttons/EditButton";
import DeleteButton from "../atoms/Buttons/DeleteButton";


class ControlPanel extends React.Component {
    render () {
        return (
            <div className="ControlPanel">
                <EditButton/>
                <DeleteButton/>
            </div>
        )
    }
}

export default ControlPanel;