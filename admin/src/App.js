import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import './responsive.css';
import 'font-awesome/css/font-awesome.min.css';


//components
import AuthorizationPage from "./components/pages/AuthorizationPage";
import Privated from './containers/Privated';

const DefaultLayout = ({component: Component, ...rest}) => {

    if (!(localStorage.getItem("username") && localStorage.getItem("password"))) {
        return <Redirect to="/login"/>
    }
    return (
        <Route {...rest} render={() => {
            return (
                <Component/>
            );
        }}/>
    )
};


class App extends Component {
    render() {
        return (
            <div className="App">
                <DefaultLayout exact path="/" component={Privated}/>
                <DefaultLayout exact path="/workflow" component={Privated}/>
                <DefaultLayout exact path="/statistics" component={Privated}/>
                <DefaultLayout exact path="/calendar" component={Privated}/>
                <DefaultLayout exact path="/users" component={Privated}/>
                <DefaultLayout exact path="/settings" component={Privated}/>

                <Route path="/login" component={AuthorizationPage}/>


            </div>
        );
    }
}

export default App;
