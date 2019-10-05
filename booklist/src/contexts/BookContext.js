import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "The Name of the Wind", author: "Patrick Rothfuss", id: 1 },
    { title: "The Final Empire", author: "Brandon Sanderson", id: 2 }
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: books.length + 1 }]);
  };
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
