import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import styled from "styled-components";
import SwtichTheme from "./SwitchTheme";

const NavWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    top:0;
    z-index: 9999;
    background-color: ${props => props.active && props.theme.body};
    transition: background-color 0.2s linear;
    .nav__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 60px;
        .nav__account {
            display: flex;
        }
    }
`;

function NavBar({ toggleTheme }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        });
        return () => window.removeEventListener("scroll");
    }, []);

    return (
        <NavWrapper active={isActive}>
            <div className="nav__content">
                <img src={logo} width="120px" alt="Netflix" />
                <div className="nav__account">
                    <div style={{ padding: "6px 16px" }}>
                        <SwtichTheme onChangeTheme={toggleTheme} />
                    </div>
                    <img src={profile} width="40px" alt="Profile Image" />
                </div>
            </div>
        </NavWrapper>
    )
}

export default React.memo(NavBar);
