import { Checkbox, Field } from '@fluentui/react-components';
import React from 'react';
import { useStyles } from './indexcss';

interface MyComponentProps {
    Zlabel: string;
    Zcheckboxlabel: string[];
}

const ZCheckBoxBtn: React.FC<MyComponentProps> = ({ Zlabel, Zcheckboxlabel }) => {
    const classes = useStyles();


    return (
        <Field>
            <label style={{ marginLeft: "10px", fontSize: "14px" }}>{Zlabel}</label>
            <div style={{ display: "flex", gap: "100px", marginTop: "20px" }}>
                {Zcheckboxlabel.map((activity, index) => (
                    <Checkbox
                        key={index}
                        className={classes.ZRadioRoot}
                        size="large"
                        label={activity}
                        
                    />
                ))}
            </div>
        </Field>
    );
};

export default ZCheckBoxBtn;
