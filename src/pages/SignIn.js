import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Authentication logic here
    };

    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="email" className="mr-sm-2">Email:</Label>
                <Input type="email" name="email" id="email" placeholder="something@idk.cool" onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="password" className="mr-sm-2">Password:</Label>
                <Input type="password" name="password" id="password" placeholder="don't tell!" onChange={e => setPassword(e.target.value)} />
            </FormGroup>
            <Button onClick={handleSignIn}>Submit</Button>
        </Form>
    );
};

export default SignIn;
