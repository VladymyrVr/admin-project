import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './responsive.css';
import 'font-awesome/css/font-awesome.min.css';

//components
import PrivateLayout from './containers/PrivateLayout';
import AuthorizationPage from "./components/pages/AuthorizationPage";
import HomePage from "./components/pages/HomePage";
import Workflow from "./components/pages/Workflow";
import Statistics from "./components/pages/Statistics";
import Calendar from "./components/pages/Calendar";
import Users from "./components/pages/Users";
import Settings from "./components/pages/Settings";

import localizer from 'react-big-calendar/lib/localizers/globalize';
import globalize from 'globalize';

localizer(globalize);

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/login" component={AuthorizationPage}/>

                    <PrivateLayout exact path="/" component={HomePage}/>
                    <PrivateLayout exact path="/workflow" component={Workflow}/>
                    <PrivateLayout exact path="/statistics" component={Statistics}/>
                    <PrivateLayout exact path="/calendar" component={Calendar}/>
                    <PrivateLayout exact path="/users" component={Users}/>
                    <PrivateLayout exact path="/settings" component={Settings}/>
                </Switch>
            </div>
        );
    }
}

export default App;