import React from 'react';
import { Route, Redirect} from 'react-router-dom';

class PrivateLayout extends React.Component {

    render ()  {
    const {component: Component, ...rest} =  this.props;
    return (
        <Route {...rest} render={() => {
            if (!localStorage.getItem('checkUser')){
                return <Redirect to="/login"/>
            }
            else if (localStorage.getItem('checkUser')) {
                return (
                    <Component/>
                )
            }
        }}/>

    )
};
}



export default PrivateLayout;