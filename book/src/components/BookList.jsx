import React from "react";
import books from "./books.json";

const BookList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Details</h2>

      {books.map((book, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Year of Launch:</strong> {book.yearOfLaunch}</p>
          <p><strong>Price:</strong> ₹{book.price}</p>
          <p><strong>Pages:</strong> {book.pages}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
