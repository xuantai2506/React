import React, { useEffect, useState } from 'react'
import formatCurrency from '../util';

export default function Cart(props) {
    const {cart , removeFromCart , order} = props ;
    const [checkout,setCheckout] = useState({
        email : "",
        name : "",
        address : "",
        showCheckout : false ,
    })

    const handleInputCheckout = (e) => {
        const name = e.target.name;
        const value = e.target.value ;
        setCheckout({
            ...checkout,
            [name] : value 
        })
    }

    const orderSubmit = (e) => {
        e.preventDefault();
        if(checkout.email !== "" && checkout.name !== "" && checkout.address !== ""){
            order({...checkout, cart : cart});
        }
    }

    return (
        <div>
            {
                cart.length === 0 ? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                    <div className="cart cart-header">You have {cart.length} in the cart {" "}</div>
                )
            }
            <div>
                <div className="cart">
                    <ul className="cart-items">
                        {
                            cart.map((product) => 
                                <li key={product._id}>
                                    <div>
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div>
                                        <div>{product.title}</div>
                                        <div className="right">
                                            {formatCurrency(product.price) +" * "+ product.count} {" "}
                                            <button className="button" onClick={() => removeFromCart(product)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="cart">
                    <div className="total">
                        <div>
                            Total : {" "}
                            {
                                formatCurrency(
                                    cart.reduce((a,b) => a + (b.price * b.count),0)
                                )
                            }
                        </div>
                        <button onClick={() => setCheckout({showCheckout : true})} className="button primary">Proceed</button>
                    </div>
                </div>
                {
                 (checkout.showCheckout) && (
                     <div className="cart">
                        <form onSubmit={orderSubmit}>
                            <ul className="form-container">
                                <li>
                                   <label>Email</label>
                                   <input type="email" value={checkout.email} required name="email" onChange={handleInputCheckout} placeholder="Enter email !"/> 
                                </li>
                                <li>
                                   <label>Name</label>
                                   <input type="text" value={checkout.name} required name="name" onChange={handleInputCheckout} placeholder="Enter name !"/> 
                                </li>
                                <li>
                                   <label>Address</label>
                                   <input type="text" value={checkout.address} required name="address" onChange={handleInputCheckout} placeholder="Enter address !"/> 
                                </li>
                            </ul>
                            <button type="submit">Checkout</button>
                        </form>
                     </div>
                 ) 
                }
            </div>
        </div>
    )
}
