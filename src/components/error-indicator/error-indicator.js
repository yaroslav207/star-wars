import React from 'react';
import './error-indicator.css'
import icon from './error-icon.png'

const ErrorIndicator = () => {

    return (
        <div className="error-wrapper">

            <img src={icon}/>


            <h1 className="error-wrapper__title">BOOM</h1>
            <span className="error-wrapper__error-massage">
                something has gone terribly wrong
            </span>
            <span className="error-wrapper__error-massage">
                (but we already sent droids to fix it)
            </span>
        </div>
    )
};

export default ErrorIndicator;