import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, errors, weight, price } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL,
        };
        console.log(data);
        const url = `https://gentle-inlet-66634.herokuapp.com/addEvent`;

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventData),
        }).then((res) => console.log("server side response", res));
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "6ed2991a490963f34aaea2c30cd3ad6b");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <Container>
            <h2 className="text-center text-white">Add Your Product Here</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label className="text-white"><b>Product Name:</b></Form.Label>
                    <Form.Control name="name" placeholder="Product Name" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white"><b>Product Weight:</b></Form.Label>
                    <Form.Control name="weight" placeholder="Product Weight" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white"><b>Product Price:</b></Form.Label>
                    <Form.Control name="price" placeholder="Product price" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-white"><b>Product Image:</b></Form.Label>
                    <Form.Control
                        name="exampleRequired" type="file" onChange={handleImageUpload} />
                </Form.Group>
                <input className="btn btn-primary" type="submit" />
            </Form>
        </Container>
    );
};

export default AddProduct;
