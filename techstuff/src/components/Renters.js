import PostForm from "./PostForm";
import React, { useState, useContext, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Spinner } from "reactstrap";
import PostEdit from "./PostEdit";
import {ItemContext} from "../context/ItemContext";


export default function Renters() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("items");

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
    return <Spinner style={{ width: "6rem", height: "6rem" }} />;
  }

  return (
    <div>
      <ItemContext.Provider value={items}>
        <PostForm />
        <PostEdit />
        
      </ItemContext.Provider>
    </div>
  );
}
