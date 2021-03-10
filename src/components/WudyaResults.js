import React, { useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Row, Col } from 'reactstrap';

const WudyaResults = (props) => {
    return (
        <Jumbotron>
            <ul>
                <li>{`${props.promptA}: ${props.votesA} votes`}</li>
                <li>{`${props.promptB}: ${props.votesB} votes`}</li>
            </ul>
        </Jumbotron>
    );
}

export default WudyaResults;