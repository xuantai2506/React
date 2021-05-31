import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"
import Product from "./Product"

const ListProduct = () => {
    const [listProduct, setListProduct] = useState([])

    useEffect(async () => {
        await axios.get('http://localhost:8080/products').then((res) => {
            setListProduct(res.data);
        })
    })

    return (
        <Container>
            <h1>Products</h1>
            <Row>
                {
                    listProduct.map((products, index) =>
                        <Col sm="4">
                            <Product key={index} products={products} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default ListProduct
