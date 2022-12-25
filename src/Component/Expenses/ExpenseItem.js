import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React from "react";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);
  // const expenseDate = new Date(2022, 12, 20);
  // const expenseTitle = "Food Price";
  // const expenseAmount = 10;
  // const LocationOfExpenditure = "Banglore";
  // const id = props.id;
  // let clickHandler = () => {
  // const a = document.getElementById("root");
  // a.removeChild(a[id]);
  //   setTitle("Updated");
  //   console.log(title);
  // };

  // let clickHandler1 = () => {
  //   setAmount(amount + 100);
  //   console.log(amount);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__description">
            <h2>{props.expenditure}</h2>
          </div>
          <ExpenseDetails amount={props.amount} />
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
        {/* <button onClick={clickHandler1}>Add</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
