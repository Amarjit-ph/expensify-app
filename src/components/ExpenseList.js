import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selector/expenses';


const ExpenseList = (props) => (
    <div>
        <h3>Expense List:</h3>
        {
            props.expenses.map((expense, index) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);


