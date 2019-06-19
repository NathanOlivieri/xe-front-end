import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../State/state'

const LanguageMenu = ( props ) => {
    const [ { menu, theme }, dispatch ] = useStateValue();

    const openMenu = () => {
        dispatch({
            type: 'TOGGLE_MENU',
            toggleMenu: !menu.isOpen
        })
    }

    const changeLanguage = ( newLang ) => {
        dispatch({
            type: 'CHANGE_LANG',
            newLanguage: newLang
        })
    }

    const StyledMenu = styled.div`
        display: flex;
        align-items: center;
        font-family: 'suranna';
        font-size: 28px;
        color: ${ theme.colors.black };
        span {
            margin: 0 16px 0 0;
        }
        img {
            height: 50px;
            width: 50px;
        }
    `
    const StyledContainer = styled.div`
        position: fixed;
        top: 125px;
        right: 0;
        padding: 0 100px 0 0;
        z-index: -1;
        background: linear-gradient(144.26deg, #FAC819 26.45%, rgba(255, 255, 255, 0) 100%), #F4E076;
        box-shadow: 5px 4px 41px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-flow: collumn;
        justify-content: center;
        align-items: center;
        transform: skewY(-15deg);
        p {
            margin: 16px;
        }
    `

    return (
        <StyledMenu>
            <span>{ props.text }</span>
            <img onClick={ openMenu } src={ menu.isOpen ? './images/baseline-delete.svg':'./images/baseline-menu.svg' } alt='menu icon'></img>
            {
                menu.isOpen ? 
                    <StyledContainer>
                        <p onClick={ () => changeLanguage('en') }>English</p>
                        <p onClick={ () => changeLanguage('fr') }>French</p>
                        <p onClick={ () => changeLanguage('sp') }>Spanish</p>
                    </StyledContainer> : null
            }
        </StyledMenu>
    )
}

export default LanguageMenu
