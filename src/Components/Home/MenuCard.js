import React from 'react'
import styled from 'styled-components'
import CardNav from './CardNav'
import { useStateValue } from '../../State/state'



const MenuCard = () => {

    const [{ theme }] = useStateValue()

    const StyledCard = styled.div`
        width: 986px;
        height: 450px;
        background: ${ theme.colors.nav_bg };
        box-shadow: 5px 4px 41px rgba(0, 0, 0, 0.25);
        border-radius: 13px;
        position: relative;
        bottom: 62px;
    `
    return (
        <StyledCard>
            <CardNav />
        </StyledCard>
    )
}

export default MenuCard