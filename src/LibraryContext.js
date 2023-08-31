// LibraryContext.js
import React, { createContext, useContext, useReducer } from 'react';

const LibraryContext = createContext();

const libraryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_LIBRARY':
      const existingItem = state.find(item => item.id === action.payload.id);

      if (!existingItem) {
        return [...state, action.payload];
      }

    default:
      return state;
  }
};

export const LibraryProvider = ({ children }) => {
  const [library, dispatch] = useReducer(libraryReducer, []);

  const addToLibrary = product => {
    dispatch({ type: 'ADD_TO_LIBRARY', payload: product });
  };

  return (
    <LibraryContext.Provider value={{ library, addToLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  return useContext(LibraryContext);
};

export default useLibrary