import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Create = (props) => {
    const [promptA, setPromptA] = useState("");
    const [promptB, setPromptB] = useState("");
    const [desc, setDesc] = useState("");
    const [hasEditedDesc, flagEditedDesc] = useState(false);

    const handleDesc = (e) => {
        setDesc(e.target.value);
        flagEditedDesc(e.target.value != "");
    }

    useEffect(() => {
        if (hasEditedDesc) return;
        const shorten = (str) => str.split(" ").slice(0, 3).join(" ");
        setDesc(`${shorten(promptA)} vs. ${shorten(promptB)}`)
    }); 

    return (
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
                <Input type="text" name="prompt_a" id="shortDesc" placeholder="Thing vs Thang"
                    onInput={handleDesc} />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

export default Create;