import React from 'react'
import "./NavBarStyle.css"

export default function NavBar() {
    return (
        <div>
            <nav className='navBarContainer'>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                </div>
                <div className='navBarBtn'>
                    <button style={{'backgroundColor':'red', 'color':'white'}}>Join Now</button>
                    <button>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}
