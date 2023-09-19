// import './ExpenseItems.css'
// function ExpenseItem(){
//     const expenseDate = new Date(2018,2,1);//This is date object
//     const expenseTitle = 'Car-Insurance'
//     const expenseAmount = 299
//     return (
//         <div className='expense-item'>
//             <div>{expenseDate.toISOString()}</div>
//             <div className='expense-item__description'>
//                 <h2>{expenseTitle}</h2>
//                 <div className='expense-item__price'>${expenseAmount}</div>
//             </div>
//         </div>
//     );
// }
// export default ExpenseItem


import React from 'react'

import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card'
function ExpenseItem(props){
//function ExpenseItem({date,title,amount}){
   
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate 
                date = {props.date}
            />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
        </li>
    );
}
export default ExpenseItem