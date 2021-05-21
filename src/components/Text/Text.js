import React from "react";
import * as S from "./style";

const Text = ({ size = "14px", color = "black", hoverColor, children, onClick }) => {
    return (
        <S.Text size={size} color={color} hoverColor={hoverColor} onClick={onClick}>
            {children}
        </S.Text>
    );
};

export default Text;
