import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("testing...");
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}....`));
