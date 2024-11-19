import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div className={styles["homepage-card"]}>
            <h1>This website is a demonstration</h1>
            <br/>
            <p>
                This website is built using React to create interactive, component-based pages, allowing seamless user experiences. Redux is used to manage global state, ensuring that data like the counter value, goals, and ships are consistently shared across components.
            </p>
            <br/>
            <ul>
                <li><em>React Components</em>: Each page, like the Counter, GoalTracker, and ShipTracker, is a separate React component. These components are responsible for rendering their respective UI and handling user interactions</li>
                <li><em>Redux State Management</em>: Actions like incrementing the counter, adding/removing goals or ships, and updating the ship tracker are dispatched to Redux. This keeps track of the data globally, making it accessible to any component without prop drilling.</li>
                <li><em>React Router</em>: The site uses React Router for easy navigation between different views without reloading the page. Each section of the app, like the counter or ship tracker, is routed through this system.</li>
            </ul>
            <br/>
            <p>
               By combining React’s component-driven architecture with Redux’s centralized state management, the app provides a smooth and dynamic experience for users to interact with their data.
            </p>
        </div>
    );
};

export default HomePage;