import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const DefaultLayout = ({component: Component, ...rest}) => {

    if (!localStorage.getItem('checkUser')){
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

export default DefaultLayout;