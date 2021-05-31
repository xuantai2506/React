import React, { useState } from 'react'

const CartContext = React.createContext();

const CartProvider = (props) => {
    const [cartItem, setCartItem] = useState([]);
    const addToCart = (product) => {
        console.log("oke qua toi product contextapi roi:", product);
        setCartItem([
            ...cartItem,
            product
        ])
    }

    return (
        <CartContext.Provider value={{
            cartItem: cartItem,
            addToCart: addToCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }