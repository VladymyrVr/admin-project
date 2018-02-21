import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//components


import TopBar from "../components/organisms/TopBar";
import LeftBar from "../components/organisms/LeftBar";

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
                            <LeftBar/>
                            <Component/>
                        </div>
                    )
                }
            }}/>

        )
    };
}

export default PrivateLayout;