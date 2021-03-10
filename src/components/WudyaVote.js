import React from 'react';
import { Container, Button, Jumbotron, Row, Col } from 'reactstrap';

const WudyaVote = (props) => {
    return ( 
        <Jumbotron>
            <Container>
                <Row>
                    <Col xs="3">
                        <Button onClick={() => props.vote([1,0])}>
                            {props.promptA}
                        </Button>
                    </Col>
                    <Col xs="auto">vs.</Col>
                    <Col xs="3">
                        <Button onClick={() => props.vote([0,1])}>
                            {props.promptB}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default WudyaVote;