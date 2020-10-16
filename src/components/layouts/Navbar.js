import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({ navHeightSet }) {
    const navbarRef = useRef(null)
    useEffect(() => {
        if (navbarRef.current) {

            let navbarheight = navbarRef.current.offsetHeight;
            navHeightSet(navbarheight)

        }
    }, [navbarRef, navHeightSet])
    return (
        <nav ref={navbarRef}>
            <div className="nav-item nav-logo"><Link to="/">Jute</Link></div>
            <div className="nav-item nav-menu">
                <Link to="/product" className="nav-links">Our Products</Link>
                <Link to="/about" className="nav-links">About</Link>
                <Link to="/contact" className="nav-links">Contact us</Link>
            </div>
            {/* <div className="nav-item">
                <button className="nav-button action">Log in</button>
            </div> */}
        </nav>
    )
}
