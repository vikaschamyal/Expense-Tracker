import React, { createContext, useReducer } from 'react';

// Create Context
export const ExpenseContext = createContext();

// Reducer Function
const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'DELETE_EXPENSE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

// Provider Component
export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};
