import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UserContext } from "../../App";

const Orders = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://gentle-inlet-66634.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => filterOrders(data));
    }, []);
    const filterOrders = (data) => {
        const filterData = data.filter(
            (order) => order.email == loggedinUser.email
        );
        setOrders(filterData);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col md={6}>
                            <h3 className="text-center">Total order:{orders.length}{" "}</h3>
                        </Col>
                        <Col md={6}>
                            <h2 className="text-center">{loggedinUser.displayName},your order summary is:</h2>
                        </Col>
                    </Row>
                    <Table striped bordered hover variant="success">
                        <thead>
                            <tr>
                                <th className="bg-primary">Product Name</th>
                                <th className="bg-primary">Quantity</th>
                                <th className="bg-primary">Weight</th>
                                <th className="bg-primary">Price</th>
                            </tr>
                        </thead>
                    </Table>
                    {orders.map((singleOrder) => {
                        return (
                            <div>
                                <div className="container">
                                    <Table striped bordered hover variant="warning">
                                        <tbody>
                                            <tr>
                                                <td >{singleOrder.name}</td>
                                                <td >1</td>
                                                <td >{singleOrder.weight}</td>
                                                <td>${singleOrder.price}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;
