import React from 'react'
import Nav from '../Global/Nav'
import styled from 'styled-components'
import { useStateValue } from '../../State/state'
import { Translator } from '../../Utils';
import MenuBG from './MenuBG';

export default function Home(props) {
    const [{ theme, text }] = useStateValue();

    const StyledHero = styled.div`
        background-image: url('xe-bg-2.png');
        height: 645px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            font-family: 'roboto';
            font-weight: 200;
            font-size: 36px;
            color: ${ theme.colors.black };
            width: 60vw;
        }
    `

    return (
        <div>
            <Nav />
            <StyledHero>
                <h2>{ Translator( text.hero ) }</h2>
            </StyledHero>
            <MenuBG />
        </div>
    )
}
