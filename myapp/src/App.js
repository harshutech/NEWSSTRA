import React,{useState} from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpenses";
let Dumy_expenses = [
  {
    id: "e1",
    tittle: "School-Fee",
    amount: 650,
    date: new Date(2021, 6, 15),
  },

  {
    id: "e1",
    tittle: "Grocery",
    amount: 500,
    date: new Date(2021, 6, 19),
  },

  {
    id: "e1",
    tittle: "House-Rent",
    amount: 750,
    date: new Date(2021, 6, 25),
  },

  {
    id: "e1",
    tittle: "Mobile-Recharge",
    amount: 150,
    date: new Date(2021, 7, 25),
  },
];
const App = () => {
  
  const [expenses, setExpenses] =useState(Dumy_expenses);
  const AddExpenseHandler =(expense)=>{
    setExpenses([expense,...expenses]);
  }
  return (
    <div>
      <NewExpense OnAddExpense={AddExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
