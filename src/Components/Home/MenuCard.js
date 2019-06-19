import React from 'react'
import { Link } from 'react-router-dom';

const MenuCard = () => {

    return (
        <div>
            <Link to={ '/services' } style={{textDecoration: 'none'}}>
                <p>Services</p>
            </Link>
            <Link to={ '/about' } style={{textDecoration: 'none'}}>
                <p>About</p>
            </Link>
            <Link to={ '/contact' } style={{textDecoration: 'none'}}>
                <p>Contact</p>
            </Link>
        </div>
    )
}

export default MenuCard;