# 💰 Expense Tracker

A full-stack Expense Tracker application built using **React.js, Express.js, Node.js, and MongoDB**.

The application allows users to add, view, edit, delete, filter, and track their expenses through a simple and responsive interface.

---

## 🚀 Features

- ➕ Add new expenses
- ✏️ Edit existing expenses
- 🗑️ Delete expenses
- 📋 View all expenses
- 🔍 Filter expenses by category
- 💰 Calculate total expenses
- 📅 Store expense dates
- 🗄️ Persist data using MongoDB
- 🔗 REST API built with Express.js
- ⚡ React frontend with Axios API integration
- 🧩 Separated backend routes for better project structure
- ❌ Cancel expense editing

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- Axios
- Bootstrap
- HTML
- CSS
- Vite

### Backend

- Node.js
- Express.js
- Mongoose
- MongoDB
- CORS
- dotenv

---

## 📂 Project Structure

```text
expense-tracker/
│
├── backend/
│   ├── models/
│   │   └── expenses.mjs
│   │
│   ├── routes/
│   │   └── expenseRoutes.mjs
│   │
│   ├── server.mjs
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── deleteModal.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── README.md
└── ...
```

---

## 🧩 Expense Data Model

Each expense contains the following fields:

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-08-11"
}
```

### Available Categories

- Food
- Shopping
- Movie
- Entertainment
- Others

MongoDB automatically generates a unique `_id` for every expense.

---

## 🔗 REST API Endpoints

### Base URL

```text
http://localhost:5000
```

### 1. Get All Expenses

```http
GET /expenses
```

Returns all expenses stored in MongoDB.

---

### 2. Add Expense

```http
POST /expenses
```

Example request body:

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-08-11"
}
```

Example response:

```json
{
  "_id": "64abc123...",
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-08-11"
}
```

---

### 3. Update Expense

```http
PUT /expenses/:id
```

Example:

```text
PUT /expenses/64abc123...
```

Request body:

```json
{
  "title": "Dinner",
  "amount": 400,
  "category": "Food",
  "date": "2026-08-11"
}
```

The expense with the specified MongoDB `_id` will be updated.

---

### 4. Delete Expense

```http
DELETE /expenses/:id
```

Example:

```text
DELETE /expenses/64abc123...
```

The expense with the specified MongoDB `_id` will be deleted.

---

## 🔄 CRUD Operations

The application follows the standard CRUD architecture:

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Create Expense | POST | `/expenses` |
| Read Expenses | GET | `/expenses` |
| Update Expense | PUT | `/expenses/:id` |
| Delete Expense | DELETE | `/expenses/:id` |

---

## 🔄 Application Flow

```text
                 React Frontend
                       │
                       │ Axios
                       ▼
                Express REST API
                       │
                       │ Mongoose
                       ▼
                    MongoDB
```

### Adding an Expense

```text
User enters expense details
          ↓
React state stores the data
          ↓
Axios sends POST request
          ↓
Express receives request
          ↓
Mongoose creates document
          ↓
MongoDB stores expense
          ↓
Response returned to React
          ↓
Expense displayed in table
```

### Editing an Expense

```text
User clicks Edit
       ↓
Existing expense data loaded into form
       ↓
User modifies the data
       ↓
User clicks Update Expense
       ↓
Axios sends PUT request
       ↓
Express updates MongoDB document
       ↓
Updated expense displayed in UI
```

### Deleting an Expense

```text
User clicks Delete
       ↓
Delete confirmation displayed
       ↓
User confirms deletion
       ↓
Axios sends DELETE request
       ↓
Express removes document from MongoDB
       ↓
Expense removed from UI
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB
- Git

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sanjayashok2006/expense-tracker
```

Move into the project directory:

```bash
cd expense-tracker
```

---

## 2️⃣ Start MongoDB

Make sure MongoDB is running locally.

The application currently connects to:

```text
mongodb://localhost:27017/expense_tracker
```

The database name is:

```text
expense_tracker
```

---

## 3️⃣ Backend Setup

Open a terminal and navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
node server.mjs
```

The backend will run on:

```text
http://localhost:5000
```

You should see something similar to:

```text
DB Connected
Server running on port 5000
```

---

## 4️⃣ Frontend Setup

Open another terminal.

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 🖥️ Running the Project

You need **three things running**:

### Terminal 1 — MongoDB

Make sure your local MongoDB server is running.

### Terminal 2 — Backend

```bash
cd backend
node server.mjs
```

### Terminal 3 — Frontend

```bash
cd frontend
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

## 📊 Current Functionality

| Feature | Status |
|---|---|
| Add Expense | ✅ |
| View Expenses | ✅ |
| Edit Expense | ✅ |
| Delete Expense | ✅ |
| Category Filter | ✅ |
| Total Expense Calculation | ✅ |
| Expense Date | ✅ |
| MongoDB Integration | ✅ |
| Express REST API | ✅ |
| React Frontend | ✅ |
| Axios Integration | ✅ |
| Separate Backend Routes | ✅ |
| Delete Confirmation | ✅ |
| User Authentication | ⏳ Future |
| JWT Authentication | ⏳ Future |
| Dashboard | ⏳ Future |
| Charts & Analytics | ⏳ Future |

---

## 🎯 Learning Outcomes

Through this project, I practiced:

- Building a full-stack web application
- Creating REST APIs using Express.js
- Performing CRUD operations
- Connecting Node.js with MongoDB
- Working with Mongoose models
- Creating Express routers
- Separating routes from the main server file
- Connecting React with an Express backend
- Using Axios for API requests
- Managing React state using `useState`
- Fetching data using `useEffect`
- Handling asynchronous operations with `async/await`
- Working with MongoDB `_id`
- Filtering data in React
- Structuring frontend and backend applications separately

---

## 🔮 Future Improvements

The current version focuses on the core expense management functionality.

Future versions may include:

- 👤 User registration and login
- 🔐 JWT authentication
- 🔒 Protected API routes
- 🔑 Password hashing
- 👥 User-specific expenses
- 📊 Expense dashboard
- 📈 Charts and analytics
- 📅 Monthly and yearly expense summaries
- 💵 Expense statistics
- 🎨 Improved UI/UX
- ☁️ Deployment

---

## 🔐 Security Note

This project currently uses a local MongoDB database.

If environment variables are used in the future, sensitive information such as:

- Database credentials
- JWT secrets
- API keys

should be stored in a `.env` file and should **not** be committed to GitHub.

Make sure `.env` is included in `.gitignore`.

---

## 📌 Project Status

**Version 1.0 — Core CRUD functionality completed**

The current version provides the essential functionality required for managing expenses.

Authentication, dashboards, charts, and advanced features are planned for future versions.

---

## 👨‍💻 Author

**Sanjay A**

B.Tech Information Technology

---

## ⭐ Acknowledgement

This project was built as a learning project to understand **full-stack web development using the MERN-style architecture** and to gain practical experience working with React, Express.js, Node.js, and MongoDB.