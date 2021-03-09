import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const Create = (props) => {
    const [promptA, setPromptA] = useState("");
    const [promptB, setPromptB] = useState("");
    const [desc, setDesc] = useState("");
    const [hasEditedDesc, flagEditedDesc] = useState(false);
    const [redirect, fireRedirect] = useState(false);

    const handleDesc = (e) => {
        setDesc(e.target.value);
        flagEditedDesc(e.target.value !== "");
    }

    useEffect(() => {
        if (hasEditedDesc || (!promptA || !promptB)) return;
        const shorten = (str) => str.split(" ").slice(0, 3).join(" ");
        setDesc(`${shorten(promptA)} vs. ${shorten(promptB)}`)
    }, [hasEditedDesc, promptA, promptB]);

    const submit = () => {
        axios.post('/api/optionpairs/', {
            desc: desc,
            prompt_a: {prompt: promptA},
            prompt_b: {prompt: promptB}
        }).then((res) => {
            console.log(res);
            fireRedirect(res.data.id);
        })};

    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="promptA">First option</Label>
                    <Input type="text" name="prompt_a" id="promptA" placeholder="Eat pant"
                        onInput={(e) => setPromptA(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="promptB">Second option</Label>
                    <Input type="text" name="prompt_b" id="promptB" placeholder="Drink pant"
                        onInput={(e) => setPromptB(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="shortDesc">Short description</Label>
                    <Input type="text" name="desc" id="shortDesc" placeholder={desc}
                        onInput={handleDesc} />
                </FormGroup>
                <Button onClick={submit}>Submit</Button>
            </Form>
            {redirect ? <Redirect to={`wudya/${redirect}`} /> : ''}
        </Container>
    );
}

export default Create;