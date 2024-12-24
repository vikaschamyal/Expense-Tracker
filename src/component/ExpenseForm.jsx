import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { TextField, Button, Box } from '@mui/material';

const ExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && amount) {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: { id: new Date().toISOString(), name, amount: parseFloat(amount) },
      });
      setName('');
      setAmount('');
    } else {
      alert('Please enter both name and amount');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
      <TextField
        label="Expense Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Amount"
        type="number"
        variant="outlined"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;
