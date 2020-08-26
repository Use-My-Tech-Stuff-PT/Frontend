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
            <Form onSubmit={submitLoginForm}>
                <FormText>Please sign in!</FormText>
                <br />
                <br />
                <Label for="inputusername" >Username: </Label>
                <Input 
                    type="username" 
                    id="inputusername" 
                    name="username"
                    placeholder="username" 
                    required="" 
                    autofocus=""
                    onChange={inputChange}
                    value={formState.username} />
                <br />
                <br />
                <Label for="inputPassword">Password: </Label>
                <Input 
                    type="password" 
                    id="inputPassword" 
                    name="password"
                    placeholder="Password" 
                    required=""
                    onChange={inputChange}
                    value={formState.password}/>
                <div>
                    <Label>
                        <Input 
                        type="checkbox" 
                        value="remember-me"
                        onChange={inputChange}/> Remember me
                    </Label>
                </div>
                <br />
                <Button ype="submit">Sign in</Button>
                <br />
                <FormText >©2020</FormText>
            </Form>
        </div>
    )
};