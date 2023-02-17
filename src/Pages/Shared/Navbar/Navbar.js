import React, { useContext } from 'react';
import { Link, useNavigate } from'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../images/Logo.png';
import { FaUser } from'react-icons/fa';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { navigate('/') })
            .catch(error => console.error(error))
    };
    const menuItems = <>
    <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
    {user?.email ?
        <>
            <li><button onClick={handleLogOut}>Sign Out</button></li>
            {user?.photoURL ?
                <p><img className='w-[2rem] h-[2rem] rounded-full' src={user?.photoURL} alt="" /></p>
                : <FaUser />
            }
        </>
        :
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
     } 
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
                <ul tabIndex={0} className="menu menu-compact dropdown-content
                 mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary">
                    {menuItems}
                </ul>
            </div>
            <img className='w-full lg:w-[30%]' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center p-0 font-bold text-secondary">
                {menuItems}
            </ul>
        </div>
    </div>
    );
};

export default Navbar;