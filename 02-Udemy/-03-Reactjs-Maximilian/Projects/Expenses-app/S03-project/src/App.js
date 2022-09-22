import React from "react";

import ExpensesView from "./components/Expenses/ExpensesView";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensesView items={expenses} />
    </div>
  );
};

export default App;
