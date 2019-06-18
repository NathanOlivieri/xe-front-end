import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../State/state'


const Logo = ( props ) => {
    
    const [{ theme }] = useStateValue();

    const StyledLogo = styled.div`
        color: ${ theme.colors.black };
        display: flex;
        align-items: center;
        font-family: 'suranna';
        div {
            background: linear-gradient(144.26deg, #FAC819 26.45%, rgba(255, 255, 255, 0) 100%), #F4E076;
            height: 65px;
            width: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                font-size: 28px;
            }
        }
        p {
            font-size: 28px;
            margin: 0 0 0 16px;
        }
    `
    
    return (
        <StyledLogo>
            <div>
                <span>XE</span>
            </div>
            <p>{ props.text }</p>
        </StyledLogo> 
    ) 
}

export default Logo
