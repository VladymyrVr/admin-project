import React from 'react';

import './NavPages.css';

class NavPages extends React.Component {
    render () {
        return (
            <ul className="PagesList">
                <li><a className="ActivePage">1</a></li>
                <li><a>2</a></li>
                <li><a>3</a></li>
                <li><a>4</a></li>
                <li><a>5</a></li>
            </ul>
        )
    }
}

export default  NavPages;