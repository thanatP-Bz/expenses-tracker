import React, { useContext, useReducer, createContext, useEffect } from "react";
import reducer from "./reducer";
import { DELETE_TRANSACTION } from "./action";

const initialState = {
  transactions: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, deleteTransaction }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
