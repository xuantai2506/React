import React from 'react'
import formatCurrency from '../util';
export default function Products(props) {
    const {products,addToCart} = props;
    return (
        <div>
            <ul className="products">
                {
                    products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#"+ product._id}>
                                    <img src={product.image} alt="product image" />
                                </a>
                                <p>
                                    {product.title}
                                </p>
                                <div className="product-price">
                                    <div className="price">
                                        {formatCurrency(product.price)}
                                    </div>
                                    <button onClick={() => addToCart(product)} className="button primary">Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
