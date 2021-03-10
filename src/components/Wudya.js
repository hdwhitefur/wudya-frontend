import React, { Component, useState, useEffect } from 'react';
import { Container, Button, Jumbotron, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch, Redirect } from 'react-router-dom';
import axios from 'axios';
import WudyaVote from './WudyaVote';
import WudyaResults from './WudyaResults';

const Wudya = (props) => {
    const [optionPair, setOptionPair] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [redirect, fireRedirect] = useState(false);
    const { id } = useParams();

    let { path, url } = useRouteMatch();

    useEffect(() => {
        update();
        console.log(`${url}/detail`);
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
            console.log(res)
            fireRedirect(true);
        });
    }

    const update = () => {
        axios.get(`/api/optionpairs/${id}`).then((res) => {
            setOptionPair(res.data);
            setLoaded(true);
        }).catch((err) => console.log(err));
    }

    const sw = () => {
        console.log(optionPair);
        fireRedirect(true);
    }

    if (redirect) {
        return (<Redirect to={`${url}/detail`} />)
    }
    return (
        <Router>
            <Switch>
                <Route path={`${url}/detail`}>
                    {loaded ? <WudyaResults promptA={optionPair.prompt_a.prompt} votesA={optionPair.votes_a}
                        promptB={optionPair.prompt_b.prompt} votesB={optionPair.votes_b}
                        redirect={redirect} id={id} sw={sw} /> : ""}
                </Route>
                <Route path="/">
                    {loaded ? <WudyaVote promptA={optionPair.prompt_a.prompt}
                        promptB={optionPair.prompt_b.prompt}
                        redirect={redirect} id={id} sw={sw} /> : ""}
                </Route>
            </Switch>
        </Router>
    );
}

export default Wudya;