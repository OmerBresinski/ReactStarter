import React from "react";
import { useForm } from "hooks";
import TextInput from "components/TextInput";

const Home = () => {
    const { form, handleChange, handleSubmit } = useForm((form) => console.log(form));

    return (
        <div style={{ width: "400px", padding: "5px" }}>
            <TextInput size="small" autoFocus label="Username" onChange={handleChange} fieldName="username" {...form.username} />
            <div onClick={handleSubmit}>Click</div>
        </div>
    );
};

export default Home;
