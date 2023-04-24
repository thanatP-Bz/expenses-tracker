import React, { useState } from "react";
import { useAppContext } from "../contexts/UseContext";
import { addItemHook } from "../hooks/addItemHook";

const AddTransition = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useAppContext();
  const { addItem } = addItemHook();

  const submitHandler = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.random().toString(),
      text,
      amount: +amount,
    };

    addItem(newItem);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransition;
