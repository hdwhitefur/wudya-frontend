import React, { Component, useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Wudya = (props) => {
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

    const vote = (votes) => {
        axios({
            method: 'put',
            url: `/api/vote/${optionPair.id}/`,
            data: {
                new_votes_a: votes[0],
                new_votes_b: votes[1]
            }
        }).then((res) => {
            //useHistory().push("/wudya/#/results")
            console.log(res)
        });
    }

    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col xs="3">
                        <Button onClick={() => vote([1, 0])}>
                            {loaded ? optionPair.prompt_a.prompt : ""}
                        </Button>
                    </Col>
                    <Col xs="auto">vs.</Col>
                    <Col xs="3">
                        <Button onClick={() => vote([0, 1])}>
                            {loaded ? optionPair.prompt_b.prompt : ""}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Wudya;