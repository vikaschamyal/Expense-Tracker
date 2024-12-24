import React,{useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseList = () => {
    const  {expenses} = useContext(ExpenseContext)
    return (
        <div>
            <h2>Expense List </h2>
            {expenses.length ? (
                     expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)
                     ) : (
                    <p>No expenses yet.</p>
            )}
        </div>
    );
}

export default ExpenseList;
