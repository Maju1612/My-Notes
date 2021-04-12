import React from 'react';
import {Link} from 'react-router-dom'

const Button = props => {
    return (
        <Link to={props.linkTo && props.linkTo}><button onClick={props.click} className={props.btnClass}><i className={props.iClass}></i>{props.text}</button></Link>
    );
}

export default Button;
