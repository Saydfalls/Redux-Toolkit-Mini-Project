import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addShip } from '../../../redux/actions/shipAction';

import styles from './ShipForm.module.css';

const ShipForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [type, setType] = useState("Container");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addShip({
                id: Date.now(),
                name: name,
                type: type,
            })
        );
        resetForm();
    };

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        if (name === "name") setName(value);
        if (name === "type") setType(value);
    };

    const resetForm = () => {
        setName("");
        setType("Container");
    };

    return (
        <div className={styles["form-container"]}>
            <form onSubmit={handleFormSubmit}>
                {/* Floating Label Input for Name */}
                <div className={styles["form-group"]}>
                    <input
                        type="text"
                        className={styles["form-field"]}
                        placeholder="Enter ship name"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="name" className={styles["form-label"]}>
                        Ship Name
                    </label>
                </div>

                {/* Dropdown for Type */}
                <div className={styles["form-group"]}>
                    <label htmlFor="type" className={styles["form-label"]}>
                        Ship Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        className={styles["form-field"]}
                        onChange={handleChange}
                        value={type}
                    >
                        <option value="Container">Container</option>
                        <option value="Bulk">Bulk</option>
                        <option value="Tanker">Tanker</option>
                    </select>
                </div>

                <button type="submit" className={styles["submit-button"]}>
                    Add Ship
                </button>
            </form>
        </div>
    );
};

export default ShipForm;