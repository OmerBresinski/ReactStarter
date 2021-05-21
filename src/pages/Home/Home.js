import React from "react";
import { useForm } from "hooks";
import Button from "components/Button";
import TextInput from "components/TextInput";
import * as C from "constant";

const Home = () => {
    const { form, handleChange, handleSubmit } = useForm(() => console.log("Submitted Form"));

    return (
        <div style={{ width: "400px", padding: "5px" }}>
            <TextInput size={C.SIZE.large} autoFocus label="Username" onChange={handleChange} fieldName="username" {...form.username} />
            <Button label="Submit" variant={C.VARIANT.contained} onClick={handleSubmit}>
                Click
            </Button>
        </div>
    );
};

export default Home;
