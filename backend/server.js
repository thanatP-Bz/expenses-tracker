import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connectDB/connectDB.js";
import expensesRoute from "./routes/expensesRoute.js";

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//route
app.use("/api/v1/expense", expensesRoute);

app.get("/", (req, res) => {
  res.send("testing...");
});

const PORT = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}....`)
    );
  } catch (error) {}
};

start();
