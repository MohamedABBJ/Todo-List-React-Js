import { useState } from 'react'
import './navbar.css'

export const NavBar = (props) =>{
    return(
        <>
        <div className="NavBarStyle">
        <button onClick={props.handleBtnState}>Menu</button>
        <button>Collections</button>
        <button>+</button>
        </div>
        </>
    )
}