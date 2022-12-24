import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  // const expenseDate = new Date(2022, 12, 20);
  // const expenseTitle = "Food Price";
  // const expenseAmount = 10;
  // const LocationOfExpenditure = "Banglore";
  // const id = props.id;
  let clickHandler = () => {
    // const a = document.getElementById("root");
    // a.removeChild(a[id]);
    setTitle("Updated");
    console.log(title);
  };

  let clickHandler1 = () => {
    setAmount(amount + 100);
    console.log(amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__description">{props.expenditure}</p>
        <ExpenseDetails amount={amount} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler1}>Add</button>
    </Card>
  );
};

export default ExpenseItem;
