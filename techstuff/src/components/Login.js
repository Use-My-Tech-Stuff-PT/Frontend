import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput,
} from "reactstrap";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Login(props) {
  const [user, setUser] = useState([]);

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
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
      .then((res) => {
        console.log("Log in successful", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        props.history.push("/renters");
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log("Loading.js=>handleLogin=>err", err);
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newSignIn = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    setFormState(newSignIn);
  };
  return (
    <div id="formContainer">
      <h2>Please sign in!</h2>
      <Form onSubmit={submitLoginForm}>
        <FormGroup>
          <Label for="inputusername">Username: </Label>
          <Input
            type="username"
            id="inputusername"
            name="username"
            placeholder="username"
            required=""
            autofocus=""
            onChange={inputChange}
            value={formState.username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="inputPassword">Password: </Label>
          <Input
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Password"
            required=""
            onChange={inputChange}
            value={formState.password}
          />

          <Label>
            <CustomInput
              type="checkbox"
              value="remember-me"
              onChange={inputChange}
            />{" "}
            Remember me
          </Label>
        </FormGroup>

        <Button type="submit">Sign in</Button>

        <FormText color="muted">©2020</FormText>
      </Form>
    </div>
  );
}
