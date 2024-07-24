import * as React from "react";

import {
    TagPicker,
    TagPickerList,
    TagPickerInput,
    TagPickerControl,
    TagPickerProps,
    TagPickerOption,
    TagPickerGroup,

    Tag,
    Avatar,
    Button,
    Field,
} from "@fluentui/react-components";



const options = [
    "Automotive & Automotive Components",
    "Consumer Electronics & Appliances",
    "02 Organisation 02",
    "Engineering & Capital Goods",
];

export const ZTagPickerComponent = () => {
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
        options[0],
    ]);

    const onOptionSelect: TagPickerProps["onOptionSelect"] = (event, data) => {
        setSelectedOptions([]);
    };
    const handleAllClear: React.MouseEventHandler = (event) => {
        setSelectedOptions([]);
    };
    const tagPickerOptions = options.filter(
        (option) => !selectedOptions.includes(option)
    );


    return (
        <Field label={"Manufacturing Sectors"}>
            <TagPicker onOptionSelect={onOptionSelect} selectedOptions={selectedOptions} >
                <TagPickerControl secondaryAction={
                    <Button appearance="transparent" size="small" shape="rounded" onClick={handleAllClear}>
                        All Clear
                    </Button>
                }>
                    <TagPickerGroup>
                        {selectedOptions.map((option) => (
                            <Tag key={option} shape="rounded" media={<Avatar aria-hidden name={option} color="colorful" />}>
                                {option}
                            </Tag>
                        ))}
                    </TagPickerGroup>
                    <TagPickerInput aria-label="Select Employees"/>
                </TagPickerControl>
                <TagPickerList>
                    {tagPickerOptions.length > 0 ?
                        tagPickerOptions.map((option) => (
                            <TagPickerOption
                                value={option}
                                key={option}
                            >
                                {option}
                            </TagPickerOption>
                        )): "No Options available"
                    }
                </TagPickerList>
            </TagPicker>
        </Field>
    );
}
