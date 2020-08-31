import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import LoadingAnimation from "./LoadingAnimation.js";
import PostCard from "./PostCard.js";
export default function OwnerGrid() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("items");
  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchItem = () => {
      axiosWithAuth()
        .get("/api/" + query)
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
        if (item.user_id == id) {
          console.log("match found");
          return <PostCard item={item} key={item.id} />;
        }
      })}
    </div>
  );
}
