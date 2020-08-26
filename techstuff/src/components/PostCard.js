import React from "react";
import missingImg from "../imgs/missingImg.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
} from "reactstrap";
export default function PostCard(props) {
  const { item } = props;

  if (Object.keys(item).length === 0) {
    return <Spinner style={{ width: "6rem", height: "6rem" }} />;
  }
  return (
    <div className="postCard">
      <Card body inverse color="primary">
        <div className="title-wrapper">
          <CardTitle>{item.item_name}</CardTitle>
          <CardTitle>{item.price}</CardTitle>
        </div>
        <CardImg
          top
          width="100%"
          src={item.img_src === null ? missingImg : item.img_src}
          alt={item.item_name}
        />
        <CardBody>
          <CardSubtitle>Description</CardSubtitle>
          <CardText>
            {item.description} <h5>posted by: {item.username}</h5>
          </CardText>
          <Button color="success">Rent</Button>
        </CardBody>
      </Card>
    </div>
  );
}
