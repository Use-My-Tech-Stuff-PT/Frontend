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

export default function PostForm(id) {
  const [newPost, setNewPost] = useState({
    item_name: "",
    description: "",
    price: "",
    img: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newPost);
    /*
    axiosWithAuth()
      .post("/api/users/:id/items", newPost)
      .then((res) => {
        console.log("SignUp.js: formSubmit: .post", res.data);
        localStorage.setItem("token", res.data.token);
        props.history.push("/renters");
      });*/
  };

  // Use state to disable button if form is not valid
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Handles changes in form and updates newPost state
  const handleChange = (event) => {
    //    event.persist();
    //    validateChange(event);
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div id="formContainer">
      <h2>Create a Post</h2>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <FormGroup>
          <Label for="item_name">Name of Item</Label>
          <Input
            type="text"
            name="item_name"
            id="idItem_name"
            placeholder="Name of item"
            value={newPost.item_name}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="idDescription"
            placeholder="Description"
            value={newPost.description}
            onChange={(event) => handleChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="idPrice"
            min="1"
            value={newPost.price}
            onChange={(event) => handleChange(event)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="price">Image Url</Label>
          <Input
            type="url"
            name="img_src"
            id="idImg_src"
            value={newPost.img_src}
            onChange={(event) => handleChange(event)}
          ></Input>
        </FormGroup>
        <Button color="primary" disabled={buttonDisabled}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
