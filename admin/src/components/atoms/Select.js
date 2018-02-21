import React from 'react';

import './Select.css';

class Select extends React.Component {

    render() {
        console.log(this.props.data);
        return(
                <select>
                    {
                        this.props.data.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }
                </select>
        )
    }
}

export default Select;