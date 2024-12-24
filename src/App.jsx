import React from 'react';
import Header from './component/Header';
import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseForm from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';
import ExpenseTotal from './component/ExpenseTotal';
import { Container, Box, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ExpenseProvider>
        <Container maxWidth="sm" sx={{ marginTop: 4 }}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Box textAlign="center" mb={3}>
              <Typography variant="h4" color="primary">
                Expense Tracker
              </Typography>
            </Box>
            <Header />
            <ExpenseForm />
            <ExpenseList />
            <ExpenseTotal />
          </Paper>
        </Container>
      </ExpenseProvider>
    </ThemeProvider>
  );
}

export default App;
