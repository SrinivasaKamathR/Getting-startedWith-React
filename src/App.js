import Expense from "./Component/Expenses/Expense";
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
  return (
    <div>
      <h1>Lets Get Started!</h1>
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
      <Expense items={expense} />
    </div>
  );
};

export default App;
