import React, { useState } from 'react';
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

const TopMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                            {/* <NavItem>
                            <NavLink href="/account/">Tài khoản</NavLink>
                        </NavItem> */}
                        </Nav>
                        <NavbarText>PSCD</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopMenu;