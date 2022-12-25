import Expense from "./Component/Expenses/Expense";
import { NewExpense } from "./Component/NewExpense/NewExpense";
const App = () => {
  const expense = [
    {
      id: 1,
      title: "Food",
      amount: 450,
      date: new Date(2022, 11, 20),
      LocationOfExpenditure: "Banglore",
    },
    {
      id: 2,
      title: "Travel",
      amount: 500,
      date: new Date(2022, 11, 20),
      LocationOfExpenditure: "JogFalls",
    },
    {
      id: 3,
      title: "personal",
      amount: 4550,
      date: new Date(2022, 11, 20),
      LocationOfExpenditure: "Medical",
    },
  ];

  const addExpenseHandler = (expenses) => {
    console.log("In App.js");
    console.log(expenses);
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
