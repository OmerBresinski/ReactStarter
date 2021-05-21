import React from "react";
import { useDispatch } from "react-redux";
import { register } from "store/actions/users";
import { useForm } from "hooks";
import Text from "components/Text";
import Button from "components/Button";
import TextInput from "components/TextInput";
import * as S from "./style";
import * as C from "constant";

const Register = () => {
    const dispatch = useDispatch();
    const { form, handleChange, handleSubmit } = useForm(onSubmit);

    function onSubmit() {
        dispatch(register(form));
    }

    return (
        <S.Register>
            <S.Content>
                <S.Form>
                    <S.Header>
                        <Text size="56px" bold>
                            Register
                        </Text>
                    </S.Header>
                    <TextInput size={C.SIZE.large} autoFocus label="Username" onChange={handleChange} fieldName="username" {...form.username} />
                    <TextInput size={C.SIZE.large} label="Password" onChange={handleChange} fieldName="password" {...form.password} type="password" />
                    <Button label="Submit" size={C.SIZE.large} variant={C.VARIANT.outlined} onClick={handleSubmit}>
                        Click
                    </Button>
                </S.Form>
            </S.Content>
        </S.Register>
    );
};

export default Register;
