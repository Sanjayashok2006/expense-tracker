import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {Expense} from "./models/expenses.mjs"

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

app.post('/expenses', async(req, res) => {
    try{
        const expense = new Expense(req.body);
        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    } catch(err) {
        res.status(500).send({msg: err.message})
    }
});

app.get("/expenses", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).send(expenses);
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

app.put('/expenses/:id', async(req, res) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).send(updatedExpense);
    }
    catch (err) {
        res.status(500).send({msg: err.message});
    }
})

app.delete('/expenses/:id', async(req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
        if (!deletedExpense) return res.status(404).send({msg: "Expense Not Found"});
        res.status(200).send({msg: "Expense Deleted Successfully"});
    }
    catch (err) {
        res.status(404).send({msg: err.message});
    }
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
});