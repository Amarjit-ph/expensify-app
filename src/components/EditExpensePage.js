import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                onSubmit={(expense) => {
                    console.log('UPDATED:', expense);
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
                expense={props.expense}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }} >
                Remove</button>
        </div>
    )
};

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}


export default connect(mapStatetoProps)(EditExpensePage);