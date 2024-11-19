import React from 'react';
import GoalForm from '../GoalForm/GoalForm';
import GoalList from '../GoalList/GoalList';

const GoalTracker = () => {
    return (
        <div>
            <GoalForm />
            <GoalList />
        </div>
    );
};

export default GoalTracker;