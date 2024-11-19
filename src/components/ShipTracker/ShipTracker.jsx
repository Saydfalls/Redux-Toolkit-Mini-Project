import React from 'react';
import ShipForm from '../ShipForm/ShipForm';
import ShipList from '../ShipList/ShipList';

import styles from './ShipTracker.module.css';

const ShipTracker = () => {
    return(
        <div>
            <ShipForm />
            <ShipList />
        </div>
    );
};

export default ShipTracker;