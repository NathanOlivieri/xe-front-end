import React from 'react'
import styled from 'styled-components'
//#678DEE

const Button = ( props ) => {

    const StyledButton = styled.button`
        background: ${ props.primary ? '#678DEE':'linear-gradient(70.68deg, #55A2FD 2.02%, rgba(255, 255, 255, 0) 98.88%), #76C7F4;' };
        border-radius: ${ props.primary ? '50px': '10px' };
        border: none;
        width: 250px;
        height: 68px;
        font-family: 'roboto';
        font-size: 24px;
        color: white;
    `

    return (
        <StyledButton id={ props.id } onClick={ props.clickHandler }>
            { props.text }
        </StyledButton>
    )
}

export default Button
