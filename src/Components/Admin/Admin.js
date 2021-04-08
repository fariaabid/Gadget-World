import { Link } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";

const Admin = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className="bg-info">
                        <Link to="/addProduct" className="text-white">Add Product</Link>
                        <br />
                        <Link to="/editProduct" className="text-white">Edit Product</Link>
                        <br/>
                        <Link to="/manageProduct" className="text-white">Manage Product</Link>
                    </Col>
                    <Col md={8} className="bg-success">
                        <AddProduct></AddProduct>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Admin;
