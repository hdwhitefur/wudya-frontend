import React, { Fragment, useState } from 'react';
import { Button, Jumbotron } from 'reactstrap';
import { useRouteMatch, Redirect } from 'react-router-dom';

const WudyaResults = (props) => {
    const [redirect, fireRedirect] = useState(false);
    const { url } = useRouteMatch();

    const makeBars = (a, b) => {
        const ratio = parseInt(100 * (a / (a+b)));
        return `linear-gradient(90deg, #007bff ${ratio}%, #6c757d ${ratio}%)`
    }

    if (redirect) {
        return (<Redirect to={`${url.substring(0,8)}`} />)
    }
    return (
        <Fragment>
            <Jumbotron style={{backgroundImage: makeBars(props.votesA, props.votesB)}}>
                <ul>
                    <li>{`${props.promptA}: ${props.votesA} votes`}</li>
                    <li>{`${props.promptB}: ${props.votesB} votes`}</li>
                </ul>
            </Jumbotron>
            <Button onClick={() => fireRedirect(true)}>Go Back</Button>
        </Fragment>
    );
}

export default WudyaResults;