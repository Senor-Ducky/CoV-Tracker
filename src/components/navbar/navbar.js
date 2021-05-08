import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return(
        <div id="navbar" className="container-lg">
            <h1 id="branding"><FontAwesomeIcon icon={faBiohazard} size='1x' />CoV-Tracker</h1>
            <ul id="button-array" className="p-2 flex space-x-4">
                <li className="flex space-x-4 ">
                    <button id="home-button"  className="bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
                        <a href="src\index.js">Home</a>
                    </button>

                    <button id="about-button" className="bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
                        <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc#intro">About</a>
                    </button>

                    <button id="contribute-button" className="bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
                        <a href="https://github.com/Senor-Ducky/CoV-Tracker">Contribute</a>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;