import express from "express";
import {
  getExpense,
  addExpense,
  deleteExpense,
} from "../controller/expensesController.js";

const router = express.Router();

router.route("/").get(getExpense);
router.route("/add").post(addExpense);
router.route("/:id").delete(deleteExpense);

export default router;
