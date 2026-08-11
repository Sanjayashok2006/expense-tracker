import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import expenseRouter from "./routes/expenseRoutes.mjs";

const app = express();

dotenv.config();

mongoose.connect("mongodb://localhost:27017/expense_tracker")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Expense Tracker Backend is running");
});

app.use("/expenses", expenseRouter);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});