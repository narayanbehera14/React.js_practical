import React, { useState } from "react";

const BlogList = () => {
  const blogpost = [
    { id: 1, title: "the creative problem solver", author: "martin", content: "story of lion", image: "" },
    { id: 2, title: "the creative problem solver", author: "gu", content: "story of dreams", image: "" },
    { id: 3, title: "the creative problem solver", author: "martin", content: "story of lion", image: "" },
    { id: 4, title: "the creative problem solver", author: "martin", content: "story of lion", image: "" }
  ];

  const [selectedPostId, setSelectedPostId] = useState("");

  const selectedPost = blogpost.find((post) => post.id === Number(selectedPostId));

  return (
    <div style={{ padding: "20px", fontFamily: "arial,sans-serif" }}>
      <h1>Blog Post</h1>

      <select
        value={selectedPostId}
        onChange={(e) => setSelectedPostId(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          marginBottom: "20px"
        }}
      >
        <option value="">-- select a blog post --</option>
        {blogpost.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>

      {selectedPost && (
        <div>
          <h2>{selectedPost.title}</h2>
          <p><b>Author:</b> {selectedPost.author}</p>
          <p>{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
