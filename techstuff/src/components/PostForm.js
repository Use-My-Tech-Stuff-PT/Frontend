import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import axios from "axios";
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function PostForm() {
  const id = localStorage.getItem("id");
  // Use State to create a new post
  const [newPost, setNewPost] = useState({
    item_name: "",
    description: "",
    price: "",
    img_src: "",
  });

  // Error logging
  const [errors, setErrors] = useState({
    item_name: "",
    description: "",
    price: "",
    img_src: "",
  });

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
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(newPost);
    axiosWithAuth()
      .post(`/api/users/${id}/items`, newPost)
      .then((res) => {
        console.log("SignUp.js: formSubmit: .post", res.data);
        window.location.reload(false);
      })
      .catch(err => {
        console.log(err);
        window.location.reload(false);
      });
  };

  // Handles changes in form and updates newPost state
  const handleChange = (event) => {
    event.persist();
    validateChange(event);
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };
  const formSchema = Yup.object().shape({
    item_name: Yup.string().required("Must include a name for your item"),
    description: Yup.string()
      .required("Please add a description")
      .min(20, "Description must include more than 25 characters"),
    price: Yup.number()
      .required("Please insert a price")
      .min(1, "Price has to be $1 or above"),
    img_src: Yup.string().url("Must be a valid url"),
  });

  // Updates the button to enabled if the form is valid
  useEffect(() => {
    formSchema.isValid(newPost).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [newPost]);
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
        {errors.item_name.length > 0 ? (
          <p className="error">{errors.item_name}</p>
        ) : null}
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
          {errors.description.length > 0 ? (
            <p className="error">{errors.description}</p>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="idPrice"
            value={newPost.price}
            onChange={(event) => handleChange(event)}
          ></Input>
          {errors.price.length > 0 ? (
            <p className="error">{errors.price}</p>
          ) : null}
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
          {errors.img_src.length > 0 ? (
            <p className="error">{errors.img_src}</p>
          ) : null}
        </FormGroup>
        <Button disabled={buttonDisabled}>Submit</Button>
      </Form>
    </div>
  );
}
