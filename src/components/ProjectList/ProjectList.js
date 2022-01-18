import React, { Component } from 'react'
import './ProjectList.css'
import Project from '../Project/Project'
import './ProjectList.css'
export default class ProjectList extends Component {

    handler = (data) => {
        this.props.setInfo(data)
    }

    render() {
        return (
            <div className='ProjectList' id='Projects'>
                <div className='ProjectList-Text'>
                    <h1 className='ProjectList-Title'>My Project</h1>
                    <p className='ProjectList-Desc'>This is some examples of projects I had done in my free time. Many are not fully functional yet, but I hope it'll be in use with your evaluation of my skillset</p>
                </div>
                <div className='ProjectList-List'>
                    <Project
                        name='PwnyAPI'
                        desc='An API for minecraft Mod based on fabric-loader. The goal is to unify all mod entity management system under one group of interface to encourage 
                        inter-project compatibiity. The logic behind the mod is base on ECS. With game objects such as ItemStack, Entity, BlockEntity carry components callled "Abilities" which will be the part that actually do work.'
                        githubLink='https://github.com/ILUVpwny/PwnyAPI'/>
                    <Project
                        name='PwnyPipe'
                        desc='An implementation of PwnyAPI Abilities System. Allowing interaction(transfer) between different mods that implement default PwnyAPI Abilities interface, without them directly
                        interact with each other.'
                        githubLink='https://github.com/ILUVpwny/PwnyPipe'/>
                    <Project
                        name='GraderBot'
                        desc='A JAVA web scraping program. Scraping data from Walailak grader system. Allowing user to get more in-dept statistic of their score. Communicating with user
                        through Discord.'
                        githubLink='https://github.com/ILUVpwny/GraderBot'/>
                    <Project
                        name='PortfolioReact'
                        desc="Basically this website. Created with React.JS library. It's  mostly mobile compatible."
                        githubLink='https://github.com/ILUVpwny/PortfolioReact'/>
                </div>
            </div>
        )
    }
}
