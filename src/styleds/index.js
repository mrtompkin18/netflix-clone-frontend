import styled, { createGlobalStyle } from "styled-components";

export const Header2 = styled.h2`
    color: ${props => props.theme.colors.primary};
`;

export const GlobalStyled = createGlobalStyle`
    body {
        font-family: 'Inter';
        font-size: '16px';
        background-color: ${props => props.theme.body};
        transition: background-color 0.5s ease-in-out;
    }
`;