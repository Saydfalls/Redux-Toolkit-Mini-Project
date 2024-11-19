import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeGoal } from "../../redux/actions/goalAction";

const GoalList = () => {
    const goals = useSelector((state) => state.goals);
    const dispatch = useDispatch();

    const handleRemoveGoal = (goal) => {
        dispatch(removeGoal(goal));
    };

    return (
        <div>
            <ul>
                {goals.map((goal) =>(
                    <li key={goal.id}>
                        <h2>{goal.text}</h2>
                        <button
                            onClick={()=> handleRemoveGoal(goal)}
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