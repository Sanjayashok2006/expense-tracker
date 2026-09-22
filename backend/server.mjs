import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expenseRouter from "./routes/expenseRoutes.mjs";

const app = express();


mongoose.connect("mongodb://localhost:27017/expense_tracker")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Expense Tracker Backend is running");
});

app.use("/expenses", expenseRouter);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});