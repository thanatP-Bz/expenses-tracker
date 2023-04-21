import Expense from "../model/expenseModel.js";
import { StatusCodes } from "http-status-codes";

const getExpense = async (req, res) => {
  const getExpense = await Expense.find({});

  try {
    res.status(StatusCodes.OK).json(getExpense);
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "item not found" });
  }
};

const addExpense = async (req, res) => {
  const createExpense = await Expense.create(req.body);

  try {
    res.status(StatusCodes.CREATED).json(createExpense);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went wrong" });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;

  const deleteExpense = await Expense.findByIdAndDelete({ _id: id });

  try {
    res.status(StatusCodes.OK).json(deleteExpense);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went wrong" });
  }
};

export { getExpense, addExpense, deleteExpense };
