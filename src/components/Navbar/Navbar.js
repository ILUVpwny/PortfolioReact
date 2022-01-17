import React, {Component} from "react";
import './Navbar.css'
import MenuItems from "./MenuItems"

class Navbar extends Component{
    state = {
        opened: false
    }


    handleClick = () =>{
        this.setState({
            opened: !this.state.opened
        })
    }

    render(){
        return(
            <div className="NavbarWhole">
                <div className="nav-toggle" onClick={this.handleClick}>
                        <i className={this.state.opened ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <nav className={this.state.opened ? 'NavbarItems active' : 'NavbarItems'}>
                    <div className="nav-whole">
                        
                    </div>
                    <h1 className="nav-logo">ILUVpwny<i className="fa-solid fa-horse-head"></i></h1>
                    <ul className='nav-menu'>
                        {MenuItems.map((item, index) => {
                            return (
                                <li className="nav-menu-item" key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                            )
                        })}

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar