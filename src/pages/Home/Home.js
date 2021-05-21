import React, { useState, useEffect } from "react";
import { fetch } from "store/actions/state1";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "components/TextInput";

const Home = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetch());
    }, []);

    const handleChange = (value) => {
        setValue(value);
    };

    return (
        <div style={{ width: "400px", padding: "5px" }}>
            <TextInput size="small" autoFocus label="Username" onChange={handleChange} value={value} />
        </div>
    );
};

export default Home;
