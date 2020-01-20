import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selector/expenses';
import selectExpensesTotal from '../selector/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            {
                expenseCount === 0 ? <h1>No Expense Found </h1> :
                    <h1>Viewing {expenseCount} {expenseWord} totalling ₹{expensesTotal}</h1>

            }

        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
