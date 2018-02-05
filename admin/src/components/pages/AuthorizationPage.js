import  React from 'react';

import './AuthorizationPage.css';

//component
import AuthorizationPanel from "../molecules/AuthorizationPanel";
import AuthMain from "../../AuthMain";


class AuthorizationPage extends React.Component {
    render() {
        return (
            <section className="AuthorizationPage">
                <div className="Authorization">
                    <AuthorizationPanel/>
                    <AuthMain/>
                </div>
            </section>
        )
    }
}

export default AuthorizationPage;