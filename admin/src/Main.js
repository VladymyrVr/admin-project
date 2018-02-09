import React from 'react';

import {Route} from 'react-router-dom';

//components
import Users from "./components/pages/Users";
import Workflow from "./components/pages/Workflow";
import Statistics from "./components/pages/Statistics";
import HomePage from "./components/pages/HomePage";
import Login from "./components/organisms/Login";


class Main extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/workflow" component={Workflow}/>
                <Route path="/statistics" component={Statistics}/>
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login}/>
            </div>
        )
    }
}

export default Main;