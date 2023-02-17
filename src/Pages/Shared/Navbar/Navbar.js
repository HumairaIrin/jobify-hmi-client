import React from 'react';
import { Link } from'react-router-dom';
import logo from '../../../images/Logo.png';

const Navbar = () => {
    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    {/* {user?.email ? */}
        <>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><button>Sign Out</button></li>
            {/* {user?.photoURL ?
                <p><img className='w-[2rem] h-[2rem] rounded-full' src={user?.photoURL} alt="" /></p>
                : <FaUser />
            } */}
        </>
    {/* } */}
</>
    return (
        <div className="navbar bg-white flex justify-between w-[90%] mb-4 mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={1} className="btn btn-secondary lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" 
                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <img className='w-full lg:w-[30%]' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center p-0 font-bold">
                {menuItems}
            </ul>
        </div>
    </div>
    );
};

export default Navbar;