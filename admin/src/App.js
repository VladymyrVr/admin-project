import React, {Component} from 'react';
import { Route} from 'react-router-dom';

import './responsive.css';
import 'font-awesome/css/font-awesome.min.css';

//components
import Privated from './containers/Privated';
import PrivateLayout from './containers/PrivateLayout';
import AuthorizationPage from "./components/pages/AuthorizationPage";




class App extends Component {
    render() {
        return (
            <div className="App">
                <PrivateLayout exact path="/" component={Privated}/>
                <PrivateLayout exact path="/workflow" component={Privated}/>
                <PrivateLayout exact path="/statistics" component={Privated}/>
                <PrivateLayout exact path="/calendar" component={Privated}/>
                <PrivateLayout exact path="/users" component={Privated}/>
                <PrivateLayout exact path="/settings" component={Privated}/>

                <Route path="/login" component={AuthorizationPage}/>
            </div>
        );
    }
}

export default App;