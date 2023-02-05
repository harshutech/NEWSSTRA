import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  const SaveExpenseDataHandler = (EnteredExpenseData)=>{
   const ExpenseData={
    ...EnteredExpenseData,
    id: Math.random().toString()
   }
   props.onAddExpense(ExpenseData);
  console.log(ExpenseData);
  };
  return (  
    <div className="NewExpense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
