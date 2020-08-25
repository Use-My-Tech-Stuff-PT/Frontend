import React, { useState } from 'react';
import { Button, Form, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

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

    // const submitLoginForm = (event) => {
    //     event.preventDefault();
    //     // Post req?/Server verification?/Lost...?
    //     axios
    //     .get("https://use-my-tech-stuff-api.herokuapp.com/login")
    //     .then(response => {
    //         console.log('Log in successful', response)
    //     })
    //     .catch("error logging in")
    // }

    const submitLoginForm = (event) => {
        event.preventDefault();
        // Post req?/Server verification?/Lost...?
        axiosWithAuth()
        .post("/api/users/login", formState)
        .then(response => {
            console.log('Log in successful', response);
            localStorage.setItem("token", response.data.payload);
            localStorage.setItem('id', response.data.id)
            props.history.push('/renters')
        })
        .catch(err=>{
            console.log('Loading.js=>handleLogin=>err', err)
        })
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
        <div className="login-card">
            <Form class="form-signin" onSubmit={submitLoginForm}>
                <FormText class="h1 mb-1 font-weight-normal">Please sign in!</FormText>
                <br />
                <br />
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
                <br />
                <FormText class="mt-5 mb-3 text-muted">©2020</FormText>
            </Form>
        </div>
    )
};