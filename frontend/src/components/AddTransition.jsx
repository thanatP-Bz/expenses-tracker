import React, { useState } from "react";
import { addItemHook } from "../hooks/addItemHook";

const AddTransition = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addItem } = addItemHook();

  const newItem = {
    id: Math.random().toString(),
    text,
    amount: +amount,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (text && amount) {
      addItem(newItem);
    }

    setText("");
    setAmount(0);
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
            {/*  (negative - expense, positive - income) */}
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
