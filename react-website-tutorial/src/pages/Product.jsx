import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import AddCart from '../contexts/AddCart';

const Product = (props) => {
    const { products } = props;
    return (
        <div>
            <Card className="mb-4">
                <CardImg top width="100%" src={products.imageUrl} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{products.name}</CardTitle>
                    <CardText>{products.description}</CardText>
                    <AddCart products={products} />
                </CardBody>
            </Card>
        </div>
    )
}

export default Product