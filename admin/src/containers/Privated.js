import React from 'react';


//components
import TopBar from "../components/organisms/TopBar";
import LeftBar from "../components/organisms/LeftBar";
import Main from "../Main";

class Privated extends React.Component {
    render() {
        return (
            <div className="Privated">
                <TopBar/>
                <LeftBar/>
                <Main/>
            </div>
        )
    }
}

export default Privated;