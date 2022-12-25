import { useState } from "react";
import Expense from "./Component/Expenses/Expense";
import { NewExpense } from "./Component/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Food",
    amount: 450,
    date: new Date(2020, 10, 2),
    LocationOfExpenditure: "Banglore",
  },
  {
    id: "e2",
    title: "Travel",
    amount: 500,
    date: new Date(2021, 9, 12),
    LocationOfExpenditure: "JogFalls",
  },
  {
    id: "e3",
    title: "personal",
    amount: 4550,
    date: new Date(2022, 8, 20),
    LocationOfExpenditure: "Medical",
  },
];

const App = () => {
  const [expense, setExpense] = useState(dummyExpenses);

  const addExpenseHandler = (expenses) => {
    setExpense((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };
  return (
    <div>
      {/* <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />

      /> */}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expense items={expense} />
    </div>
  );
};

export default App;
