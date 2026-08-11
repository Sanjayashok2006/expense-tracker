import { Router } from "express";
import { Expense } from "../models/expenses.mjs";

const router = Router();


// router.get("/", (req, res) => {
//     res.send("Expense Tracker Backend is running");
// });

router.post('/', async(req, res) => {
    try{
        const expense = new Expense(req.body);
        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    } catch(err) {
        res.status(500).send({msg: err.message})
    }
});

router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).send(expenses);
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).send(updatedExpense);
    }
    catch (err) {
        res.status(500).send({msg: err.message});
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
        if (!deletedExpense) return res.status(404).send({msg: "Expense Not Found"});
        res.status(200).send({msg: "Expense Deleted Successfully"});
    }
    catch (err) {
        res.status(404).send({msg: err.message});
    }
});


export default router;