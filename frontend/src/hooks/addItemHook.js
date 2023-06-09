import axios from "axios";
import { useAppContext } from "../contexts/UseContext";
import { ADD_TRANSACTION } from "../contexts/action";

export const addItemHook = () => {
  const { dispatch } = useAppContext();

  const addItem = async (transaction) => {
    const response = await axios.post(
      `https://expense-tracker-94sm.onrender.com/api/v1/expense/add`,
      transaction
    );

    const data = response.data;

    dispatch({ type: ADD_TRANSACTION, payload: data });

    //add to localstorage
    localStorage.setItem("item", JSON.stringify(data));
  };

  return { addItem };
};
