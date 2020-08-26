import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import PostsGrid from "./components/PostsGrid.js";
function App() {
  return (
    <div>
      <Nav />
      <PostsGrid />
    </div>
  );
}

export default App;

// react animation code
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
