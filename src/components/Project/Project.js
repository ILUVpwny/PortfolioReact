import React from 'react'
import './Project.css'
function Project(props) {
    return (
        <div className='Project'>
            <div className='Project-Text'>
                <h1 className='Project-Title'>{props.name}</h1>
                <p className='Project-Desc'>{props.desc}</p>
            </div>
            <a href={props.githubLink} target="_blank" className={props.githubLink ? 'Project-Gitlink': 'Project-Gitlink hide'}>
                <div className='Project-Gitbtn-Wrapper'>
                    <p className="Project-Gitbtn-Text"><i className="fab fa-github"></i>ILUVpwny</p>
                </div>
            </a>
        </div>
    )
}

export default Project
