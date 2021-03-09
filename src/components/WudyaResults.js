import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WudyaResults = (props) => {
    const [optionPair, setOptionPair] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get("/api/optionpairs/" + id)
            .then((res) => {
                setOptionPair(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col xs="3">
                        <Button disabled>
                            {loaded ? `${optionPair.prompt_a.prompt}: ${optionPair.votes_a} votes` : ""}
                        </Button>
                    </Col>
                    <Col xs="auto">vs.</Col>
                    <Col xs="3">
                        <Button disabled>
                            {loaded ? `${optionPair.prompt_b.prompt}: ${optionPair.votes_b} votes` : ""}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default WudyaResults;