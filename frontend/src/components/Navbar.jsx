import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='containerNav'>
        <h2>TopLearn</h2>
        <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li> <Link className='link' to="/add">AddProduct</Link></li>
        </ul>
    </div>
  )
}

export default Navbar