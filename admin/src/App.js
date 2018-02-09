import React, {Component} from 'react';
import { Route} from 'react-router-dom';

import AuthorizationPage from "./components/pages/AuthorizationPage";

import './responsive.css';
import 'font-awesome/css/font-awesome.min.css';


//components
import Privated from './containers/Privated';
import DefaultLayout from './containers/DefaultLayout';




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
