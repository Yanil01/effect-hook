import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  // Initialize state to store posts data
  const [posts, setPosts] = useState([]);

  // useEffect hook to perform side effects (like data fetching) in function components
  useEffect(() => {
    // Using axios to make a GET request to fetch posts data
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // Logging the response to the console
        console.log(res);
        // Updating the posts state with the fetched data
        setPosts(res.data);
      })
      .catch((err) => {
        // Logging any errors to the console
        console.log(err);
      });
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      <ul>
        {/* Mapping over posts state to display each post's title in a list */}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
