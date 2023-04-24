import React, { useContext, useReducer, createContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";
import { DELETE_TRANSACTION } from "./action";
import { ADD_TRANSACTION } from "./action";
import { GET_TRANSACTION } from "./action";

const initialState = {
  transactions: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("item"));

    dispatch({ type: GET_TRANSACTION, payload: item });
  }, []);

  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  /*  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };
 */
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
