import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 12, 20);
  // const expenseTitle = "Food Price";
  // const expenseAmount = 10;
  // const LocationOfExpenditure = "Banglore";
  // const id = props.id;
  let clickHandler = (e) => {
    // const a = document.getElementById("root");
    // a.removeChild(a[id]);
    console.log("click");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__description">{props.expenditure}</p>
        <ExpenseDetails amount={props.amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
