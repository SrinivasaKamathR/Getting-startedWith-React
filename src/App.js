import "./App.css";
import ExpenseItem from "./Component/ExpenseItem";
function App() {
  const expense = [
    {
      id: 1,
      title: "Food",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "Banglore",
    },
    {
      id: 2,
      title: "Travel",
      amount: 500,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "JogFalls",
    },
    {
      id: 3,
      title: "personal",
      amount: 4550,
      date: new Date(2021, 5, 12),
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
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      /> */}
      {expense.map((data, i) => {
        return (
          <ExpenseItem
            key={i}
            title={data.title}
            amount={data.amount}
            date={data.date}
            expenditure={data.LocationOfExpenditure}
          />
        );
      })}
    </div>
  );
}

export default App;
