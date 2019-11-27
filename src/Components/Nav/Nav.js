import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
    <div className="Nav">
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/info'><h3>Info</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
    </div>
    )
};

export default Nav;