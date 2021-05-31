import React, { useContext, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container
} from 'reactstrap';
// context api
import { CartContext } from '../contexts/Cart';

const TopMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { cartItem } = useContext(CartContext);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">Trang chủ</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/list-products/">Danh Sách Sản Phẩm</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/list-products/">Cart ({cartItem.length})</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>PSCD</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopMenu;