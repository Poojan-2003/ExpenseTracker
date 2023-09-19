import React, { useState } from 'react'
import ExpensesList from './Expense/ExpenseList';
// import ExpenseItem from './ExpenseItems';
import ExpenseChart from './ExpenseChart';
import './Expenses.css'
import Card from './Card';
import ExpenseFilter from './Expense/ExpenseFilter';
function Expenses(props){
  const [filteredYear ,setfilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense)=> {
    return expense.date.getFullYear().toString() === filteredYear;
  })
    return (
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          
          {/* {props.items.map((i)=>(
            <ExpenseItem
            title={i.title}
            amount={i.amount}
            date={i.date}
          />
          ))} */}
          {/* {filteredExpense.map((expense)=>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
          ))} */}
          
          {/* <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          />
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          /> */}

<ExpenseChart expenses={filteredExpense} />

<ExpensesList items={filteredExpense} />
        </Card>
      );

}
export default Expenses;