import React from 'react'
import './AboutMe.css'
import myImage from '../../resources/me.png'


function AboutMe() {
    return (
        <div className='AboutMe' id='AboutMe'>
            <div className='AboutMe-Text'>
                <h1 className='AboutMe-Header'>About Me</h1>
                <p className='AboutMe-Intro'>I am Naravish Thongnok. A Benjamarachutit student...</p>
                <p className='AboutMe-Main'>I consider myself a JAVA coder, since it's the language I am most comfortable with, but as you can see, I can code in other languages too 
                like this website. it's coded in HTML CSS JS with react library, it's done in 2 days...so I am pretty pround of it even if it doesn't look very good :)
                and ofcourse I know c/c++, python and some other JVM based languages, but I think what languages I know doesn't matter that much. It's about what I can do with them.
                I mostly spent my programming time on Minecraft Mod...I know it's quite a kids game...And I use c/c++ in competitive programming and embeded system...Talking 
                about embedded system, I also know a bit about electronics, not quite enough to build complex analog system, but enough to get by with most digital stuffs.</p>
            </div>
            <img src={myImage} alt='me' className='AboutMe-Me' id='AboutMe' />
        </div>
    )
}


export default AboutMe
