import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((data, i) => {
        return (
          <ExpenseItem
            key={i}
            id={data.id}
            title={data.title}
            amount={data.amount}
            date={data.date}
            expenditure={data.LocationOfExpenditure}
          />
        );
      })}

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      /> */}
    </Card>
  );
};

export default Expense;
