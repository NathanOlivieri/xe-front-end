import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../State/state'
import Logo from './Logo';
import LanguageMenu from './LanguageMenu';
import { Translator } from '../../Utils'

const Nav = () => {
    const [{ theme, nav, text }] = useStateValue();

    const StyledNav = styled.header`
        position: fixed;
        top: 0;
        height: 100px;
        width: 100vw;
        padding: 0 5vw;
        background: ${nav.visible ? theme.colors.nav_bg : 'none' };
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 5px 4px 41px rgba(0, 0, 0, 0.25);
        button {
            width: 75px;
            height: 50px;
        }
    `;

    return (
        <StyledNav>
            <Logo text={ Translator(text.logo) }/>
            <LanguageMenu text={ Translator(text.menu) }/>
        </StyledNav>
    )
}

export default Nav