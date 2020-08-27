import React from "react";
import PostForm from "./PostForm";
import HomeGrid from "./HomeGrid.js";
import OwnerGrid from "./OwnerGrid.js";
export default function Renters() {
  return (
    <div>
      Owners
      <PostForm />
      <OwnerGrid />
    </div>
  );
}
