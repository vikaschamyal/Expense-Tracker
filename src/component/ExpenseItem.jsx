import React,{useContext} from 'react';
import { ExpenseContext} from '../context/ExpenseContext'
import { FaRupeeSign } from "react-icons/fa";

const ExpenseItem = ({ expense }) => {
    const { dispatch } = useContext(ExpenseContext);
  
    const handleDelete = () => {
      dispatch({ type: 'DELETE_EXPENSE', payload: expense.id });
    };
  
    return (
      <div>
        <span>{expense.name}</span> 
            -------------------------
        <span><FaRupeeSign />{expense.amount.toFixed(2)}</span>
            -------------------------
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default ExpenseItem;