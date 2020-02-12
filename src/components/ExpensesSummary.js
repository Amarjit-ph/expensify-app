import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selector/expenses';
import selectExpensesTotal from '../selector/expenses-total';




/*

CODE FOR DISPLAY NAME

//import { firebase } from '../firebase/firebase';

let name1;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        name1 = user.displayName;
    }
});
*/

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">

            <div className="content-container">
                {
                    expenseCount === 0 ? <h1>No Expense Found </h1> :
                        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>₹{expensesTotal}</span> </h1>

                }
                <div>
                    <Link to='/create' className="button" >Add Expense</Link>
                </div>
            </div>
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
