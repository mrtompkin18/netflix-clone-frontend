import React from 'react'
import styled from "styled-components";
import * as Icon from 'react-feather';

export const Theme = styled.div`
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
`;

export default function SwitchTheme({ onChangeTheme }) {
    return (
        <Theme>
            <Icon.Moon fill="true" onClick={onChangeTheme} />
        </Theme>
    )
}
