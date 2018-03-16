import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//components


import TopBar from "../components/organisms/TopBar";

class PrivateLayout extends React.Component {

    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={() => {
                if (!localStorage.getItem('checkUser')) {
                    return <Redirect to="/login"/>
                }
                else if (localStorage.getItem('checkUser')) {
                    return (
                        <div>
                            <TopBar/>
                            <Component/>
                        </div>
                    )
                }
            }}/>

        )
    };
}

export default PrivateLayout;