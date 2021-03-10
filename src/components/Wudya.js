import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch, Redirect } from 'react-router-dom';
import axios from 'axios';
import WudyaVote from './WudyaVote';
import WudyaResults from './WudyaResults';

const Wudya = (props) => {
    const [optionPair, setOptionPair] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [redirect, fireRedirect] = useState(false);
    const { id } = useParams();
    const { url } = useRouteMatch();

    useEffect(() => {
        update();
    }, []);

    useEffect(() => {
        fireRedirect(false);
    }, [redirect])

    const vote = (votes) => {
        axios({
            method: 'put',
            url: `/api/vote/${optionPair.id}/`,
            data: {
                new_votes_a: votes[0],
                new_votes_b: votes[1]
            }
        }).then((res) => {
            fireRedirect(true);
            update();
        });
    }

    const update = () => {
        axios.get(`/api/optionpairs/${id}`).then((res) => {
            setOptionPair(res.data);
            setLoaded(true);
        }).catch((err) => console.log(err));
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
                        redirect={redirect} id={id} vote={vote} /> : ""}
                </Route>
                <Route path="/">
                    {loaded ? <WudyaVote promptA={optionPair.prompt_a.prompt}
                        promptB={optionPair.prompt_b.prompt}
                        redirect={redirect} id={id} vote={vote} /> : ""}
                </Route>
            </Switch>
        </Router>
    );
}

export default Wudya;