import React from 'react';

import { Route } from 'react-router-dom';

//components
import Users from "./components/pages/Users";
import Workflow from "./components/pages/Workflow";




class Main extends React.Component {
    render () {
        return (
            <div>
               <Route exact path="/" component={Users}/>
               <Route path="/workflow" component={Workflow}/>
            </div>
        )
    }
}

export default Main;