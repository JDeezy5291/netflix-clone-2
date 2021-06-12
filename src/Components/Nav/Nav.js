import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, setShow] = useState(false)

    const transistionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transistionNavBar)
        return () => window.removeEventListener("scroll", transistionNavBar)
    }, [])
    
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__content">
                <img 
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <img 
                    className="nav__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav
