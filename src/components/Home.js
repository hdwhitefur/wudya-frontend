import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionPairs: [],
            loaded: false
        }
    }

    componentDidMount() {
        axios.get("/api/optionpairs/")
            .then((res) => this.setState({
                optionPairs: res.data,
                loaded: true}))
            .catch((err) => console.log(err));
    }

    render() {
        if (!this.state.loaded) return <p>Loading...</p>;
        return (
            <ul>
                {this.state.optionPairs.map(pair => {return(
                    <li key={pair.id}>
                        {pair.prompt_a.prompt} vs. {pair.prompt_b.prompt}
                    </li>
                )})}
            </ul>
        )
    }
}

export default Home;