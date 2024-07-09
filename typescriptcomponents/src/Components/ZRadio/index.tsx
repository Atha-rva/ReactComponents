import { Checkbox } from '@fluentui/react-components';
import React from 'react';
import { useStyles } from './indexcss';

const ZCheckBoxBtn = () => {
    const classes = useStyles();

    const handleCheckboxChange = (index, event, checked) => {
        console.log(`Checkbox ${index + 1} (${event.target.textContent}) is ${checked ? 'checked' : 'unchecked'}`);
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <label style={{ marginLeft: "10px", fontSize: "14px" }}>Applicable line of activities</label>
            <div style={{ display: "flex", gap: "100px", marginTop: "20px" }}>
                <Checkbox size="large" label="Manufacturing" onChange={(event, checked) => handleCheckboxChange("Manufaturing", event, checked)} />
                <Checkbox size="large" label="Services" onChange={(event, checked) => handleCheckboxChange("Services", event, checked)} />
                <Checkbox size="large" label="Trading" onChange={(event, checked) => handleCheckboxChange("Trading", event, checked)} />
            </div>
        </div>
    );
};

export default ZCheckBoxBtn;
