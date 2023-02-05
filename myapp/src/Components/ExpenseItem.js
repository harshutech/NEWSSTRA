import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props)=>{

  return (
    
    <div className="Expense-item">
      <ExpenseDate date={props.date}/>
      <div className="Expense-item__description">
        <h2>{props.Tittle}</h2>
        <div className="Expense-item__price">{props.Price} $</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
