import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Row, Col } from 'reactstrap';

const WudyaVote = (props) => {
    return ( 
        <Jumbotron>
            <Container>
                <Row>
                    <Col xs="3">
                        <Button onClick={() => props.sw()}>
                            {props.promptA}
                        </Button>
                    </Col>
                    <Col xs="auto">vs.</Col>
                    <Col xs="3">
                        <Button onClick={() => props.sw()}>
                            {props.promptB}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default WudyaVote;