import styled from "styled-components";

export const Text = styled.div`
    font-size: ${({ size }) => size};
    color: ${({ color }) => color};
    cursor: ${({ onClick }) => onClick && "pointer"};

    &:hover {
        color: ${({ hoverColor }) => hoverColor};
    }
`;
