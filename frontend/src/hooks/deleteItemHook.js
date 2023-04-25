import axios from "axios";
import { useAppContext } from "../contexts/UseContext";
import { DELETE_TRANSACTION } from "../contexts/action";

export const deleteItemHook = () => {
  const { dispatch } = useAppContext();

  const deleteItem = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/expense/${id}`
    );

    if (response) {
      dispatch({ type: DELETE_TRANSACTION, payload: id });
    }

    //remove from localstorage
    localStorage.removeItem("item");
  };

  return { deleteItem };
};
