import './ExpenseForm.css'

import { useState } from 'react';
const ExpenseForm = (props) => {
    const [title , settitle] = useState();
    const [amount, setamount] = useState();
    const [date , setdate] = useState();
    const titleChangeHandler = (event) => {
        settitle(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setdate(event.target.value)

    }
    const amountChangeHandler = (event) => {
        setamount(event.target.value)

    }

    // const[userInput , setuserInput] = useState({
    //     title : '',
    //     amount :'',
    //     date :''
    // })

    // const titleChangeHandler = (event) => {
    //     // setuserInput({
    //     //     ...userInput,
    //     //     title :  event.target.value
    //     // })
    //     setuserInput((prevState )=>{
    //         return {...prevState,title : event.target.value}
    //     })
    // }
    // const dateChangeHandler = (event) => {
    //     setuserInput({
    //         ...userInput,
    //         date :  event.target.value
    //     })

    // }
    // const amountChangeHandler = (event) => {
    //     setuserInput({
    //         ...userInput,
    //         amount :  event.target.value
    //     })

    // }

     const SubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title:title,
            amount:+amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)
        setdate('')
        settitle('')
        setamount('')
    }
    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                    value={title || ''}
                    type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={amount || ''} type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={date || ''} type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>

    );
}
export default ExpenseForm