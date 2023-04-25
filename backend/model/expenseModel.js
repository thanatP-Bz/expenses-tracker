import mongoose from "mongoose";
const { Schema } = mongoose;

const Expense = new Schema({
  text: String,
  amount: Number,
});

export default mongoose.model("Expense", Expense);
