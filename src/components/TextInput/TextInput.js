import React, { useState, useEffect } from "react";
import * as C from "constant";
import { TextField } from "@material-ui/core";

const TextInput = ({
    rows,
    value,
    label,
    isDirty,
    required,
    disabled,
    onChange,
    autoFocus,
    multiline,
    placeholder,
    variant = C.VARIANT.standard,
    size = C.TEXT_INPUT_SIZE.small,
}) => {
    const [shouldShowError, setShouldShowError] = useState(false);

    useEffect(() => {
        validate(value);
    }, []);

    const validate = (value) => {
        setShouldShowError(!value?.length);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        validate(value);
        onChange(value);
    };

    return (
        <TextField
            fullWidth
            size={size}
            rows={rows}
            label={label}
            value={value}
            variant={variant}
            required={required}
            disabled={disabled}
            autoFocus={autoFocus}
            multiline={multiline}
            onChange={handleChange}
            placeholder={placeholder}
            error={!disabled && isDirty && shouldShowError}
        />
    );
};

export default TextInput;
