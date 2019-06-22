import React from 'react'
import MenuCard from './MenuCard'
import { useStateValue } from '../../State/state'
import styled from 'styled-components'

const MenuBG = () => {
    const [{ theme }] = useStateValue()

    const StyledContainer = styled.div`
        height: 500px;
        background: ${ theme.colors.dark_blue };
        display: flex;
        justify-content: center;
    `
    return (
        <StyledContainer>
            <MenuCard />
        </StyledContainer>
    )
}

export default MenuBG;