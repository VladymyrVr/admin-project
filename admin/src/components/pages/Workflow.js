import React from 'react';
import Board from 'react-trello';
import {connect} from 'react-redux';


import './Workflow.css';
import CustomCard from "../organisms/CustomCard";
import CustomLaneHeader from "../molecules/CustomLaneHeader";

const data = {
    lanes: [
        {
            id: 'lane1',
            header: 'To Do',
            label: '',
            cards: [
                {id: 'Task1', title: 'New website for JCD.pl', description: '', label: '5 days left'},
                {id: 'Task2', title: 'Free PSD Template vol. 3', description: '', label: '5 days left'},
                {id: 'Task3', title: 'New logo for Google', description: '', label: '5 days left'},
                {id: 'Task4', title: 'New website for Windu.org', description: '', label: '5 days left'},
                {id: 'Task5', title: 'Free PSD Template vol. 2', description: '', label: '5 days left'}
            ]
        },


        {
            id: 'lane2',
            header: 'In Progress',
            label: '',
            cards: [
                {id: 'Task6', title: 'Iconset Vol. 3', description: '', label: '5 days left'},
                {id: 'Task7', title: 'New logo for Apple', description: '', label: '1 days left'},
                {id: 'Task8', title: 'Daily UI Kit', description: '', label: '5 days left'},
                {id: 'Task9', title: 'Business Cards', description: '', label: '2 days delays'}
            ]
        },
        {
            id: 'lane3',
            header: 'Completed',
            label: '()',
            cards: [
                {id: 'Task10', title: 'Free PSD Template vol. 1', description: '', label: 'Completed'},
                {id: 'Task11', title: 'Iconset Vol. 1', description: '', label: 'Completed'},
                {id: 'Task12', title: 'New website for Symu.co', description: '', label: 'Completed'},
                {id: 'Task13', title: 'Iconset vol. 2', description: '', label: 'Completed'},
            ]
        }
    ]
};

class Workflow extends React.Component {

    render() {
        return (
            <section
                className={this.props.statusMenu === false || this.props.statusMenu === undefined ? "WorkflowPage" : "WorkflowPage WorkflowPageActive"}>
                <Board data={data} draggable style={
                    {
                        background: 'transparent',
                        display: 'flex',
                        height: 'max-content',
                        width: '100%',
                        justifyContent: 'space-around'
                    }
                }
                       customCardLayout
                       customLaneHeader={<CustomLaneHeader/>}
                >
                    <CustomCard/>
                </Board>

            </section>
        )
    }
}

const mapState = (state, props) => {
    return {
        statusMenu: state.status
    }
};

export default connect(mapState)(Workflow);