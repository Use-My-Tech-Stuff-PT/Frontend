
// UNUSED ///////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import axiosWithAuth from "../utils/axiosWithAuth";
// import { Spinner } from "reactstrap";
// import PostCard from "./PostCard.js";
// export default function OwnerGrid() {
//   const [items, setItems] = useState([]);
//   const [query, setQuery] = useState("items");
//   const id = localStorage.getItem("id");

//   useEffect(() => {
//     const fetchItem = () => {
//       axiosWithAuth()
//         .get("/api/" + query)
//         .then((res) => {
//           console.log(res.data);
//           setItems(res.data);
//         })
//         .catch((error) => {
//           console.log("Error: ", error);
//         });
//     };
//     fetchItem();
//   }, [query]);
//   if (items.length === 0) {
//     return <Spinner style={{ width: "6rem", height: "6rem" }} />;
//   }
//   return (
//     <div className="posts-grid">
//       {items.map((item) => {
//         console.log(id);
//         console.log(item.user_id);
//         if (item.user_id == id) {
//           console.log("match found");
//           return (
//             <div>
//               <PostCard item={item} key={item.id} />
//               <button>Edit Item</button>
//               <button>Delete Item</button>
//             </div>
//           )
//         }
//       })}
//     </div>
//   );
// }