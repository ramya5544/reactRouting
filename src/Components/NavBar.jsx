import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                {/* <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link> */}

                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/product'>product detail</NavLink>

            </nav>
        </div>
    );
};

export default NavBar;