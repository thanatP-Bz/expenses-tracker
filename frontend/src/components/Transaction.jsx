import React from "react";
import { deleteItemHook } from "../hooks/deleteItemHook";

const Transaction = ({ transaction }) => {
  const { deleteItem } = deleteItemHook();

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteItem(transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
