import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { Typography, Box } from '@mui/material';

const ExpenseTotal = () => {
  const { expenses } = useContext(ExpenseContext);
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <Box textAlign="center" mt={3}>
      <Typography variant="h6" color="primary">
        Total Expense: ${total.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default ExpenseTotal;
