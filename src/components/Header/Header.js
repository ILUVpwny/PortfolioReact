import React from 'react'
import './Header.css'
import Typical from 'react-typical'
import Button from '../Button'
function Header() {
    return (
        <div className='HeaderItem'>
            <div className='Header-Text'>
                <h1 className='Header-Greeting'>Hello, I am...</h1>
                <h1 className='Header-Name'></h1>
                <p className='Header-Typing'>
                    I'm a 
                    <Typical className="Header-Typing-Animation"
                        loop={Infinity}
                        wrapper="b"
                        steps={
                            [
                                ' Student',
                                1000,
                                ' Soon-to-be Undergraduate',
                                1000,
                                ' Computer Enthusiast',
                                1000,
                                ' Self-proclaim Minecraft ModDev',
                                1000,
                            ]
                        }
                    />
                </p>
                <Button text='Learn More' />
            </div>
        </div>
    )
}

export default Header
