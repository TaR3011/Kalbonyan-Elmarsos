import React from "react";

import ExpensesView from "./components/Expenses/ExpensesView";
import NewExpenses from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Printer Paper",
      amount: 15.0,
      date: new Date(2022, 8, 12),
    },
    {
      id: "e2",
      title: "New Laptop",
      amount: 899.99,
      date: new Date(2022, 9, 10),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 144.99,
      date: new Date(2020, 8, 29),
    },
    {
      id: "e4",
      title: "Book",
      amount: 20,
      date: new Date(2021, 3, 18),
    },
  ];

  const addExpensesHandler = (expenses) => {
    console.log("In app.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpensesHandler} />
      <ExpensesView items={expenses} />
    </div>
  );
};

export default App;
