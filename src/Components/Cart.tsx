import React from 'react'

interface Props {
    cartItems : string[];
    onClear : ()=> void;
    
}

const Cart = ({cartItems,onClear} : Props) => {
return(
    <>
    <ul>Available Items
    {cartItems.map(item=><li key={item}>{item}</li>)}
    </ul>
    <button onClick={onClear}>Clear cart</button>
    

    </>
)
}

export default Cart;