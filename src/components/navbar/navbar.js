import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <div id="navbar" className="container-lg">
            <h1 id="branding">CoV-Tracker</h1>
            <ul id="button-array" className="p-2 flex space-x-4">
                <li className="flex space-x-4 ">
                    <button id="home-button" class="bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
                        Home
                    </button>

                    <button id="about-button" class="bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
                        About
                    </button>

                    <button id="contribute-button" class="bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500 hover:from-blue-400 hover:to-light blue-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
                        Contribute
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;