import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpesneSummary from './ExpensesSummary'


const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpesneSummary />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage