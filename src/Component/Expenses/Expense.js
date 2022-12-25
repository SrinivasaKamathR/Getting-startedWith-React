import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              // id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              expenditure={expense.LocationOfExpenditure}
            />
          );
        })}

        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      /> */}
      </Card>
    </div>
  );
};

export default Expense;
