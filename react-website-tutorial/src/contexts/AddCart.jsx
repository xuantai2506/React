import React, { useContext } from 'react';
// reactstrap
import { Button } from 'reactstrap'
// context
import { CartContext } from './Cart';

const AddCart = (props) => {
    const { products } = props;
    const { addToCart } = useContext(CartContext);

    return (
        <Button onClick={() => addToCart(products)}>Add</Button>
    )
}

export default AddCart
