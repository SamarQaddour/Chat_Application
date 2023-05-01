import React from "react";
import samarImage from '../img/samarImage.jpeg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>private chat</span>
              <div className='user'>
                  <img src={samarImage} alt='' />
                  <span>samar</span>
                  <button>logout</button>
              </div>

        </div>
    )
}

export default Navbar;