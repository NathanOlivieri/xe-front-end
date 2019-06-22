import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../State/state'
import Logo from './Logo';
import LanguageMenu from './LanguageMenu';
import { Translator } from '../../Utils'

const Nav = () => {
    const [ { theme, nav, text }, dispatch ] = useStateValue();

    const StyledNav = styled.header`
        position: fixed;
        top: 0;
        height: 100px;
        width: 100%;
        padding: 0 5vw;
        background: ${nav.scrollPos > 0 ? theme.colors.nav_bg : 'none' };
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 5px 4px 41px rgba(0, 0, 0, 0.25);
        button {
            width: 75px;
            height: 50px;
        }
    `;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = () => {
        const newWindowPos = window.pageYOffset
        dispatch({
            type: 'SET_SCROLL_POS',
            newScrollPos: newWindowPos
        })
    }
    

    return (
        <StyledNav>
            <Logo text={ Translator(text.logo) }/>
            <LanguageMenu text={ Translator(text.menu) }/>
        </StyledNav>
    )
}

export default Nav