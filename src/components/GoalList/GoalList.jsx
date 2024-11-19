import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGoal } from "../../redux/actions/goalAction";

import styles from "./GoalList.module.css";

const GoalList = () => {
    const goals = useSelector((state) => state.goals);
    const dispatch = useDispatch();

    const handleRemoveGoal = (goal) => {
        dispatch(removeGoal(goal));
    };

    return (
        <div className={styles["goal-list-container"]}>
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id} className={styles["goal-card"]}>
                        <h2>{goal.text}</h2>
                        <button
                            onClick={() => handleRemoveGoal(goal)}
                            className={styles["button"]}
                        >
                            &#215;
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoalList;