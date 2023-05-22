import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import { useUserContext } from '../../context/userContext';


function Header() {
    const {user} = useUserContext();
    const loggedInStatus = () => {
        if (user.isLoggedIn === false) {
            return {
                path: '/login',
                displayText: 'Login',
                msg: 'You are not logged in'
            };
        } else {
            return {
                path: '/logout',
                displayText: 'Logout',
                msg: `Logged in as: ${user.displayName}`
            };
            
        }
    }

    return (
        <>
        <header>
            <div className='header-container'>
            <div className='logo'>
                <h1><Link to="/">DiscoverMOTrails</Link></h1>
            </div>
                <nav>
                    <ul className='nav-links'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                        <li>
                            <Link to={loggedInStatus().path}>{loggedInStatus().displayText}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='logged-in-as'>
                <p>{loggedInStatus().msg}</p>
            </div>
        </header>
        </>
    );
}

export default Header;