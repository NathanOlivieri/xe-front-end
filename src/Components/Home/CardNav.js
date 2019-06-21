import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../State/state'
import { Translator } from '../../Utils'
import { Link } from 'react-router-dom'

const CardNav = () => {
    const [{ theme, text }] = useStateValue()

    const StyledNav = styled.header`
        width: 100%;
        background: ${ theme.colors.nav_bg };
        display: flex;
        justify-content: space-around;
        padding: 24px 100px
        border-bottom: solid 2px ${ theme.colors.app_bg };
        border-top-right-radius: 13px;
        border-top-left-radius: 13px;
        p {
            font-family: 'suranna';
            font-size: 32px;
        }
    `

    return (
        <StyledNav>
            <Link to={ '/services' } style={{textDecoration: 'none'}}>
                <p>{ Translator(text.nav.services) }</p>
            </Link>
            <Link to={ '/about' } style={{textDecoration: 'none'}}>
                <p>{ Translator(text.nav.about) }</p>
            </Link>
            <Link to={ '/contact' } style={{textDecoration: 'none'}}>
                <p>{ Translator(text.nav.contact) }</p>
            </Link>
        </StyledNav>
    )
}

export default CardNav