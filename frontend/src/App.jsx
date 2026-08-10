import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";   

function App() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:5000/expenses")
        .then((response) => {
            setExpenses(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);

  const filteredExpenses = filterCategory === "All"? expenses : expenses.filter((expense) => expense.category === filterCategory);

  const btn = editIndex === null ? "Add Expense" : "Update Expense";

  const total = filteredExpenses.reduce((sum, expense) => {
  return sum + Number(expense.amount);
  }, 0);

  async function handleAddExpense() {

  if (!title || !amount || !category || !date) {
    alert("Please fill all fields");
    return;
  }

  const expense = {
    title: title,
    amount: amount,
    category: category,
    date: date
  };
try {
  if (editIndex !== null) {
    const response = await axios.put(
    `http://localhost:5000/expenses/${editIndex}`,
    expense
);
    const updatedExpenses = expenses.map((item) =>
    item._id === editIndex ? response.data : item
  );
    setExpenses(updatedExpenses);
    setEditIndex(null);
  } else {
    const response = await axios.post(
          "http://localhost:5000/expenses",
          expense
      );
    console.log(response.data);
    setExpenses([...expenses, response.data]);  
  }
  setTitle("");
  setAmount("");
  setCategory("");
  setDate("");
}
catch (err) {
  console.log(err)
}
}

function handleEdit(id) {
  const expense = expenses.find((item) => item._id === id);
  setTitle(expense.title);
  setAmount(expense.amount);
  setCategory(expense.category);
  setDate(expense.date);
  setEditIndex(id);
}

const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/expenses/${id}`);
    const updatedExpenses = expenses.filter((item) => item._id !== id);
    setExpenses(updatedExpenses);
  }
  catch (err){
    console.log(err);
  }
};

  return (
    <div className='container mt-5 mb-5 w-50'>
      <h1 className='text-center mb-4'>Expense Tracker</h1>
      <div className="card p-4">

        <h3 className="text-center mb-3">Add Expense</h3>

        <div className="mb-3">
          <label className="form-label">Title</label>

          <input
            type="text"
            className="form-control"
            value= {title}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter expense title"
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Expenses</label>

          <input
            type="number"
            className="form-control"
            value= {amount}
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter expense amount"
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Choose an option:</label>
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>
              Choose a category
            </option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Movie">Movie</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>

          <input
            type= "date"
            value = {date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
            required 
          />
        </div>
        <div className='d-flex justify-content-center'>
        <button onClick={handleAddExpense} className='btn btn-success w-25'>{btn}</button>
        </div>
      </div>
      {
        expenses.length > 0 ? (
          <>
          <h4>Total Expenses: {total}</h4>
          <select
            className="form-select mb-3"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Movie">Movie</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={expense._id}>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td>
                  <button
                    onClick={() => handleDelete(expense._id)}
                    className="btn "
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                  <button
                    onClick={() => handleEdit(expense._id)}
                    className="btn "
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                </td>              
              </tr>
              ))}
            </tbody>
        </table>
        </>
          ):(
          <p>Add to see the expenses</p>
        )
      }
    </div>
  )
}

export default App