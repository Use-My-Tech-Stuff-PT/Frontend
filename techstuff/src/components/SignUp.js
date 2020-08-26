import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
// import axios from "axios";
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function SignUp(props) {
  // Use State to create new users
  const [newUser, setNewUser] = useState({
    username: "",
    // email: "",
    password: "",
    role: "",
  });

  // Error logging
  const [errors, setErrors] = useState({
    username: "",
    // email: "",
    password: "",
    role: "",
  });

  // Use state to hold post data
  const [post, setPost] = useState([]);

  // Use state to disable button if form is not valid
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // checks if form is valid and catches errors and updates the errors state
  const validateChange = (event) => {
    Yup.reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({ ...errors, [event.target.name]: err.errors[0] });
      });
  };

  // Makes post request and users data into post state then clears setnew user for testing
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axiosWithAuth()
  //   .post("/api/users/register", newUser)
  //   .then((res) => {
  //     setPost(res.data);
  //     console.log(res.data);
  //     setNewUser({
  //       username: "",
  //       // email: "",
  //       password: "",
  //       role: "",
  //     });
  //     props.history.push('/renters')
  //   });
  // };


  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/users/register", newUser)
      .then(res => {
        console.log("SignUp.js: formSubmit: .post", res.data);
        localStorage.setItem('token', res.data.token)
        props.history.push('/renters')
      })
  };




  // Handles changes in form and updates newUser state
  const handleChange = (event) => {
    event.persist();
    validateChange(event);
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  // Shaping object data with correct requirements for validation
  const formSchema = Yup.object().shape({
    username: Yup.string().required("Must include a username"),
    // email: Yup.string()
    //   .email("Must be a valid email address.")
    //   .required("Must include email address."),
    password: Yup.string()
      .min(6, "Passwords must be at least 6 characters long.")
      .required("Password is Required"),
    role: Yup.string().required("Please make your selection"),
  });

  // Updates the button to enabled if the form is valid
  useEffect(() => {
    formSchema.isValid(newUser).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [newUser]);

  return (
    <div id="formContainer">
      <h2>Sign Up</h2>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <FormGroup>
          <Label for="userName">Name</Label>
          <Input
            type="text"
            name="username"
            id="userName"
            placeholder="Username"
            value={newUser.username}
            onChange={(event) => handleChange(event)}
          />
          {errors.username.length > 0 ? (
            <p className="error">{errors.username}</p>
          ) : null}
        </FormGroup>
        {/* <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="userEmail"
            placeholder="Email"
            value={newUser.email}
            onChange={(event) => handleChange(event)}
          />
          {errors.email.length > 0 ? (
            <p className="error">{errors.email}</p>
          ) : null}
        </FormGroup> */}
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="userPassword"
            placeholder="Password"
            value={newUser.password}
            onChange={(event) => handleChange(event)}
          />
          {errors.password.length > 0 ? (
            <p className="error">{errors.password}</p>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="idRole">Renter or Owner</Label>
          <Input
            className="w-25"
            type="select"
            name="role"
            id="idRole"
            value={newUser.role}
            onChange={(event) => handleChange(event)}
          >
            <option disabled></option>
            <option value="Renter">Renter</option>
            <option value="Owner">Owner</option>
          </Input>
          {errors.role.length > 0 ? (
            <p className="error">{errors.role}</p>
          ) : null}
        </FormGroup>
        <Button color="primary" disabled={buttonDisabled}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
