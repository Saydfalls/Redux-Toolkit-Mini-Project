import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../redux/actions/goalAction";

import styles from "./GoalForm.module.css";

const GoalForm = () => {
    const dispatch = useDispatch();
    const [goal, setGoal] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addGoal({
                id: Date.now(),
                text: goal,
            })
        );
        resetForm();
    };

    const handleChange = (e) => {
        setGoal(e.target.value);
    };

    const resetForm = () => {
        setGoal("");
    };

    return (
        <div className={styles["form-container"]}>
            <form className={styles["form"]} onSubmit={handleFormSubmit}>
                {/* Floating Label Input for Goal */}
                <div className={styles["form-group"]}>
                    <input
                        type="text"
                        className={styles["form-field"]}
                        placeholder="Enter your goal"
                        name="goal"
                        value={goal}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="goal" className={styles["form-label"]}>
                        Goal
                    </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className={styles["submit-button"]}>
                    {/* Paper Plane Icon */}
                </button>
            </form>
        </div>
    );
};

export default GoalForm;
