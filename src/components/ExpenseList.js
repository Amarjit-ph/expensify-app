import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selector/expenses';


const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">

            <div className="show-for-mobile">Expenses:</div>

            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>

        </div>

        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item__message">
                        <span>No Expense Found</span>
                    </div>
                ) : (

                        props.expenses.map((expense, index) => {
                            return <ExpenseListItem key={expense.id} {...expense} />
                        })

                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);


