import React from 'react'
import styled from "styled-components";
import * as Icon from 'react-feather';

export const Theme = styled.div`
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
`;

function SwitchTheme({ onChangeTheme }) {
    return (
        <Theme>
            <Icon.Moon onClick={onChangeTheme} />
        </Theme>
    )
}

export default SwitchTheme;