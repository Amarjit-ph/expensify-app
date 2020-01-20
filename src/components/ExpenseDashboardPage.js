import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;