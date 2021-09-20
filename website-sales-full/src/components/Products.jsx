import React, { useEffect, useState } from 'react'
import formatCurrency from '../util';
import Fade from "react-reveal/Fade";
import Modal from 'react-modal';
import Zoom from "react-reveal/Zoom";
export default function Products(props) {
    const {products,addToCart} = props;
    const [productDetail,setProductDetail] = useState(null);
    const openModal = (product) => {
        setProductDetail(product);
    }
    const closeModal = () => {
        setProductDetail(null);
    }
    return (
        <div>
            <Fade bottom cascade={true} >
                <ul className="products">
                    {
                        products.map(product => (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#"+ product._id} onClick={() => openModal(product)}>
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
            </Fade>
            {
                productDetail && (
                    <Modal isOpen={productDetail} onRequestClose={closeModal}>
                        <Zoom>
                            <button className="close-modal" onClick={closeModal}>X</button>
                            <div className="product-detail">
                                <img src={productDetail.image} alt={productDetail.title} />
                                <div className="product-details-description">
                                    <p><strong> {productDetail.title} </strong>
                                    </p>
                                    <p> {productDetail.description} </p>
                                    <p>
                                        Avaiable Sizes
                                        {productDetail.availableSizes.map(x => (
                                            <span>
                                                {" "}
                                                <button className="button">{x}</button>
                                            </span>
                                        ))}
                                        <div className="product-price">
                                            <div> {formatCurrency(productDetail.price)} </div>
                                            <button className="button primary" onClick={() => {
                                                addToCart(productDetail);
                                                closeModal();
                                            }}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )
            }
        </div>
    )
}