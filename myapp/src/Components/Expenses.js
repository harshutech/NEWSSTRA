import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';


const  Expenses = (props) => {
return(
    <div className="Expenses">
        {
            props.item.map(
                expense=>(
                    <ExpenseItem 
                    date={expense.date}
                    Tittle={expense.tittle}
                    Price={expense.amount}/>

                )
            )
            
        }


        </div>

);
}

export default Expenses;