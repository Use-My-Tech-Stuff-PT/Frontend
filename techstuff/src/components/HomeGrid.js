import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import PostCard from "./PostCard.js";
import LoadingAnimation from "./LoadingAnimation.js";
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
    return <LoadingAnimation />;
  }
  return (
    <div className="posts-grid">
      {items.map((item) => {
        return <PostCard item={item} key={item.id} />;
      })}
    </div>
  );
}
