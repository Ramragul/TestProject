//import React from 'react'

interface Props {
    cartItemsCount : number;
}
const Navbar = ({cartItemsCount} : Props) => {
    return(
        <div>Total Items In the Shop : {cartItemsCount}</div>
    )
}

export default Navbar;