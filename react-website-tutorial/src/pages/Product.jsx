import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
const Product = (props) => {
    const { imageUrl, name, description } = props;
    return (
        <div>
            <Card className="mb-4">
                <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <Button>Add</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Product