import React, { useState } from 'react';
import { Button, Form, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default function Login (props) {
    const [user, setUser] = useState([]);

    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const submitLoginForm = (event) => {
        event.preventDefault();
        // Post req?/Server verification?/Lost...?
        axios
        .post("https://use-my-tech-stuff-api.herokuapp.com/api/users/register", formState)
        .then(response => {
            alert('Log in successful', response)
        })
        .catch("error logging in")
    }

    const inputChange = e => {
        e.persist();
        const newSignIn = {
            ...formState,
            [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        setFormState(newSignIn)
    }
    return(
        <div>
            <Form className="form-signin">
                <img class="mb-1" src="https://raw.githubusercontent.com/Use-My-Tech-Stuff-PT/Marketing-Page/orlando-rivera-jr/img/Use%20My%20Tech%20Horizontal%20Logo_Teal%20Icon.png" alt="" width="auto" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Label for="inputusername" class="sr-only">Username: </Label>
                <Input 
                    type="username" 
                    id="inputusername" 
                    name="username"
                    class="form-control" 
                    placeholder="username" 
                    required="" 
                    autofocus=""
                    onChange={inputChange}
                    value={formState.username} />
                <br />
                <Label for="inputPassword" class="sr-only">Password</Label>
                <Input 
                    type="password" 
                    id="inputPassword" 
                    name="password"
                    class="form-control" 
                    placeholder="Password" 
                    required=""
                    onChange={inputChange}
                    value={formState.password}/>
                <div class="checkbox mb-3">
                    <Label>
                        <Input 
                        type="checkbox" 
                        value="remember-me"
                        onChange={inputChange}/> Remember me
                    </Label>
                </div>
                <Button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</Button>
                <FormText class="mt-5 mb-3 text-muted">©2020</FormText>
            </Form>
        </div>
    )
};