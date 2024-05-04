import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import './styles/NavBar-Style/NavBar.scss';

function NavBar() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/githubsearch">GitHub Repositories Search</Link>
                </li>
                {/* <li>
                    <Link to="/login">Login</Link>
                </li> */}
                {
                    !auth.email && (
                        <li>
                            <Link to={'./login'}>
                                Login
                            </Link>
                        </li>
                    )
                }
                {
                    auth.email && (
                        <li>
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;