import React, { UseState } from "react";
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [ExteredTittle, SetEnteredTittle] = useState("");
  const [ExteredAmount, SetEnteredAmount] = useState("");
  const [ExteredDate, SetEnteredDate] = useState("");

  const TittleChangeHandler = (event) => {
    SetEnteredTittle(event.target.vlaue);
  };
  const AmountChangeHandler = (event) => {
    SetEnteredAmount(event.target.vlaue);
  };
  const DateChangeHandler = (event) => {
    SetEnteredDate(event.target.vlaue);
  };
  function SubmitHandler(event) {
    event.preventDefault();

    const ExpenseData = {
      Tittle: ExteredTittle,
      amount: ExteredAmount,
      date: new Date(ExteredDate),
    };
    props.onSaveExpenseData(ExpenseData)

    SetEnteredTittle("");
    SetEnteredAmount("");
    SetEnteredDate("");
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="CardTittle">
        <h2>Expense Tracker</h2>
        <p>Track Your Daily Expenses</p>
      </div>
      <div className="NewExpense__Controls">
        <div className="NewExpenses__Control">
          <label className="NewExpense__Label">Tittle</label>
          <input
            value={ExteredTittle}
            type="text"
            placeholder="Tittle Here"
            onChange={TittleChangeHandler}
          ></input>
        </div>
      </div>
      <div className="NewExpense__Controls">
        <div className="NewExpenses__Control">
          <label className="NewExpense__Label">Amount</label>
          <input
            value={ExteredAmount}
            type="text"
            min="0.01"
            step="0.01"
            placeholder="Amount here"
            onChange={AmountChangeHandler}
          ></input>
        </div>
      </div>
      <div className="NewExpense__Controls">
        <div className="NewExpenses__Control">
          <label className="NewExpense__Label">Date</label>
          <input
            value={ExteredDate}
            type="date"
            onChange={DateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="NewExpense__Action">
        <button type="reset">Reset</button>
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
