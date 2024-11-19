import React from 'react';

import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div>
            <div>
                <div>
                    <Link to={"/counter"}>Counter</Link>
                    <Link to={"/shiptracker"}>Ship Docks Tracker</Link>
                    <Link to={"/goaltracker"}>Goals Tracker</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;