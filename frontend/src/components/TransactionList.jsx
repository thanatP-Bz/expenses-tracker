import React, { useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../contexts/UseContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/v1/expense/");

      const data = response.data;

      if (response) {
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
