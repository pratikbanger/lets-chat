import React from 'react'
import { UserAuth } from '../context/AuthContext'

const NavBar = () => {

    const { currentUser, logOut } = UserAuth();

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div>
            <div className="navbar bg-neutral fixed z-10 text-neutral-content shadow-xl rounded-3xl rounded-t-none">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className='bg-gray-800 mb-2 text-white' href='https://github.com/pratikbanger' target="_blank">GitHub</a></li>
                            <li><a className='bg-gray-800 text-white' href='https://www.linkedin.com/in/pratik-bangar-677013258' target="_blank">Linkedin</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Let's chat</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='https://github.com/pratikbanger' target="_blank">GitHub</a></li>
                        <li><a href='https://www.linkedin.com/in/pratik-bangar-677013258' target="_blank">Linkedin</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {currentUser ? <button onClick={handleLogOut} className="btn btn-primary btn-sm md:btn md:btn-primary mr-4">Logout</button> : '' }
                </div>
            </div>
        </div>

    )
}

export default NavBar
