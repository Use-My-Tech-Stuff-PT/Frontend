import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    selection: "",
  });
  const [post, setPost] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newUser);
    setNewUser({
      username: "",
      email: "",
      password: "",
      selection: "",
    });
  };
  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };
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
        </FormGroup>
        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="userEmail"
            placeholder="Email"
            value={newUser.email}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
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
        </FormGroup>
        <FormGroup>
          <Label for="idSelection">Renter or Owner</Label>
          <Input
            type="select"
            name="selection"
            id="idSelection"
            value={newUser.selection}
            onChange={(event) => handleChange(event)}
          >
            <option></option>
            <option value="Renter">Renter</option>
            <option value="Owner">Owner</option>
          </Input>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
}
