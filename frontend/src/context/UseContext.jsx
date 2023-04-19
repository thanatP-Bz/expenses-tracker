import React, { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
import { DELETE_TRANSACTION } from "./action";
import { ADD_TRANSACTION } from "./action";

const initialState = {
  transactions: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };

  return (
    <AppContext.Provider
      value={{ ...state, deleteTransaction, addTransaction }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
