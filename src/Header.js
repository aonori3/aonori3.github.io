import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Aoi Otani</h1>
            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>  {/* Navigates to the About page */}
                    <li><Link to="/projects">Projects</Link></li>  {/* Navigates to the Projects page */}
                    <li><Link to="/contact">Contact</Link></li>  {/* Navigates to the Contact page */}
                </ul>
            </nav>
        </header>
    )
}

export default Header;