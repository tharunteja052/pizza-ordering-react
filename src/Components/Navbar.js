import React, {useState} from 'react'
import logo from '../Sources/pizzaLogo.png'
import {Link} from 'react-router-dom'
import "../CSS/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [openlink, setopenlink] = useState(false)

    const togglenav = () => {
        setopenlink(!openlink)
    }

  return (
    <div className='navbar'>
        <div className='leftnav' id={openlink ? "open" : "close"}>
            <img src={logo} />
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className='rightnav'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={togglenav}>
                <ReorderIcon />
            </button>
        </div>

    </div>
  )
}

export default Navbar