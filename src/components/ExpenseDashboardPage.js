import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpesneSummary from './ExpensesSummary'


const ExpenseDashboardPage = () => (
    <div>
        <ExpesneSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage