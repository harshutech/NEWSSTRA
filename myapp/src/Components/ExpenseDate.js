import React from 'react';
import './ExpenseDate.css'

const  ExpenseDate=(props)=>{
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});

    return(
        <div className="Expense-Date">
            <div className="Expense-Date_day">{day}</div>
            <div className="Expense-Date_month">{month}</div>
            <div className="Expense-Date_year">{year}</div>
        </div>
    )
}

export default ExpenseDate;