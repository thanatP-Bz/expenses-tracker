import React, { useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../contexts/UseContext";
import Transaction from "./Transaction";
import { GET_TRANSACTION } from "../contexts/action";

const TransactionList = () => {
  const { transactions, dispatch } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://expense-tracker-94sm.onrender.com/api/v1/expense/"
      );

      const data = response.data;

      if (response) {
        dispatch({ type: GET_TRANSACTION, payload: data });

        //localStorage
        localStorage.setItem("item", JSON.stringify(data));
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
