import { DELETE_TRANSACTION } from "./action";
import { ADD_TRANSACTION } from "./action";
import { GET_TRANSACTION } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_TRANSACTION: {
      return {
        ...state,
        transactions: action.payload,
      };
    }
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };

    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
