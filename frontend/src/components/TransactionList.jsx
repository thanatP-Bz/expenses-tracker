import React from "react";
import { useAppContext } from "../context/UseContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useAppContext();

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
