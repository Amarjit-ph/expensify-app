import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { history } from "../routers/AppRouter";
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">EDIT EXPENSE</h1>
                </div>
            </div>

            <div className="content-container">
                <ExpenseForm
                    onSubmit={(expense) => {
                        console.log('UPDATED:', expense);
                        props.dispatch(startEditExpense(props.expense.id, expense));
                        //props.history.push('/dashboard');
                        history.push('/dashboard');
                    }}
                    expense={props.expense}
                />
                <button
                    className="button button--delete"
                    onClick={() => {
                        props.dispatch(startRemoveExpense({ id: props.expense.id }));
                        //props.history.push('/dashboard');
                        history.push('/dashboard');
                    }} >
                    REMOVE EXPENSE</button>
            </div>
        </div>
    )
};

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}


export default connect(mapStatetoProps)(EditExpensePage);