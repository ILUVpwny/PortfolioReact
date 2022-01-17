import React from 'react'
import './Button.scss'
function Button() {
    return (
        <a href="#AboutMe">
            <div id="container">
                <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
                </button>
            </div>
        </a>
    )
}

export default Button
