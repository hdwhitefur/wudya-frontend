import React, { Component, useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Wudya = (props) => {
    const [optionPairs, setOptionPairs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get("/api/optionpairs/" + id)
            .then((res) => {
                setOptionPairs(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    });

    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col xs="3">
                        <Button>{optionPairs.prompt_a.prompt}</Button>
                    </Col>
                    <Col xs="auto">vs.</Col>
                    <Col xs="3">
                        <Button>{optionPairs.prompt_b.prompt}</Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Wudya;