import React, { useState } from "react";
import missingImg from "../imgs/missingImg.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Alert,
} from "reactstrap";
export default function PostCard(props) {
  const { item } = props;
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);

  return (
    <div className="postCard">
      <Alert color="success" isOpen={visible} toggle={onDismiss}>
        Rent Request Sent!
      </Alert>
      <Card body>
        <div className="title-wrapper">
          <CardTitle>{item.item_name}</CardTitle>
          <CardTitle>{item.price}</CardTitle>
        </div>
        <CardImg
          top
          width="100%"
          src={
            item.img_src === null || item.img_src === ""
              ? missingImg
              : item.img_src
          }
          alt={item.item_name}
        />
        <CardBody>
          <CardSubtitle>Description</CardSubtitle>
          <CardText>
            {item.description} <span>posted by: {item.username}</span>
          </CardText>
          <Button
            onClick={() => {
              console.log("clicked");
              setVisible(true);
            }}
          >
            Rent
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
