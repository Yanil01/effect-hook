import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState(null); // Initialize post state to null
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    setLoading(true); // Set loading to true before making the API call
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data); // Update post state with fetched data
        setLoading(false); // Set loading to false after successful fetch
        setError(null); // Reset error state
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false); // Set loading to false in case of error
        setError("Error fetching data. Please try again."); // Set error message
      });
  }, [idFromButtonClick]);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Fetch Post</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={handleClick} style={{ padding: "5px 10px" }}>
          Fetch Post
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetching;
