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
        top: 100px;
        right: 0;
        background: linear-gradient(144.26deg, #FAC819 26.45%, rgba(255, 255, 255, 0) 100%), #F4E076;
        display: flex;
        flex-flow: collumn;
        justify-content: center;
        align-items: center;
        p {
            margin: 16px;
        }
    `

    return (
        <StyledMenu>
            <span>{ props.text }</span>
            <img onClick={ openMenu } src='./images/baseline-menu.svg' alt='menu icon'></img>
            {
                menu.isOpen ? 
                    <StyledContainer>
                        <p>English</p>
                        <p onClick={ changeLanguage }>French</p>
                        <p>Spanish</p>
                    </StyledContainer> : null
            }
        </StyledMenu>
    )
}

export default LanguageMenu
