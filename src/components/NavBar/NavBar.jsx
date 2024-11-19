import React from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink instead of Link
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div>
            <div className={styles["nav-bar"]}>
                <div className={styles["nav-bar-cards"]}>
                    <NavLink
                        className={({ isActive }) => `${styles["nav-bar-card"]} ${isActive ? styles.active : ""}`}
                        to={"/"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${styles["nav-bar-card"]} ${isActive ? styles.active : ""}`}
                        to={"/counter"}
                    >
                        Counter
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${styles["nav-bar-card"]} ${isActive ? styles.active : ""}`}
                        to={"/shiptracker"}
                    >
                        Ship Docks Tracker
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${styles["nav-bar-card"]} ${isActive ? styles.active : ""}`}
                        to={"/goaltracker"}
                    >
                        Goals Tracker
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;