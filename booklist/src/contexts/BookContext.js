import React, { createContext, useState, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  // First item is the reducer, second is the initial state.
  const [books, dispatch] = useReducer(bookReducer, []);
  return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
