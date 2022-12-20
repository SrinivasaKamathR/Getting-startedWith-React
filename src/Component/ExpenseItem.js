import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 12, 20);
  // const expenseTitle = "Food Price";
  // const expenseAmount = 10;
  // const LocationOfExpenditure = "Banglore";
  return (
    <div className="expense-item">
      <div>{props.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__description">{props.expenditure}</p>
        <p className="expense-item__price">Rs.{props.amount}</p>
      </div>
    </div>
  );
}
