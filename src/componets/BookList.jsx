import React, { useState, useEffect } from "react";
import { API_URL } from "../API";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-[80vh] w-full grid grid-cols-3 justify-items-center">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <div>
              <h2>{book.title}</h2>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              <button>Add to Favorites</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
