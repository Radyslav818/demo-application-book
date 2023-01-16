import React, { useState, useEffect } from "react";
import { API_URL } from "../API";
import axios from "axios";
import { useNavigate } from "react-router";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

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
    <div className="min-h-[80vh] w-full grid grid-cols-[repeat(3,1fr)] justify-items-center text-center">
      {books.map((book) => (
        <div
          key={book.id}
          className="text-center flex flex-col align-center justify-center mx-5 my-0"
        >
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img
              className=""
              src={book.image_url}
              alt="#"
              onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            <button>Add to Favorites</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
