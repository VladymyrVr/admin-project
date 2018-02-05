import React from 'react';

import { Route } from 'react-router-dom';

//components
import Login from "./components/organisms/Login";

class AuthMain extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Login}></Route>
            </div>
        )
    }
}

export default AuthMain;