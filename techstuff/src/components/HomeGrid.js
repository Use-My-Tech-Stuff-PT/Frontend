import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Spinner } from "reactstrap";
import PostCard from "./PostCard.js";
export default function PostsGrid() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("items");

  useEffect(() => {
    const fetchItem = () => {
      axios
        .get("https://use-my-tech-stuff-api.herokuapp.com/api/" + query)
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    };
    fetchItem();
  }, [query]);
  if (items.length === 0) {
    return <Spinner style={{ width: "6rem", height: "6rem" }} />;
  }
  return (
    <div className="posts-grid">
      {items.map((item) => {
        return <PostCard item={item} key={item.id} />;
      })}
    </div>
  );
}
