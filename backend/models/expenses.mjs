import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

export const Expense = mongoose.model("Expense", expenseSchema);