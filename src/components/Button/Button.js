import React from 'react'
import './Button.scss'
function Button(props) {
    return (
        <a href="#AboutMe">
            <div id="container">
                <button className="learn-more">
                    <span className="circle" aria-hidden="true" >
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text" >{props.text}</span>
                </button>
            </div>
        </a>
    )
}

export default Button
