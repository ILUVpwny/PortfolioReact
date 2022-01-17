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
            <div className='ProjectList'>
                <div className='ProjectList-Text'>
                    <h1 className='ProjectList-Title'>My Project</h1>
                    <p className='ProjectList-Desc'>This is some examples of projects I had done in my free time. Many are not fully functional yet, but I hope it'll be in use with your evaluation of my skillset</p>
                </div>
                <div className='ProjectList-List'>
                    <Project
                        name='PwnyAPI'
                        desc='An API for minecraft Mod based on fabric-loader. The goal is to unify all mod entity management system under one group of interface to encourage 
                        inter-project compatibiity. The logic behind the mod is base on ESC. With game objects such as ItemStack, Entity, BlockEntity carry components callled "Abilities" which will be the part that actually do work.'
                        githubLink='https://github.com/ILUVpwny/PwnyAPI'/>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        )
    }
}
