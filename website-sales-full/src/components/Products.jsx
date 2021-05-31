import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import formatCurrency from '../util';
export default function Products(props) {
    const { addToCart } = props;
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts);
    }, [dispatch])

    return (
        <div>
            <ul className="products">
                {
                    (products) ? (
                        <div>Loading....</div>
                    ) :
                        (
                            products.map(product => (
                                <li key={product._id}>
                                    <div className="product">
                                        <a href={"#" + product._id}>
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
                        )
                }
            </ul>
        </div>
    )
}