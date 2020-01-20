import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, note }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{note}</p>
        <p>₹{amount}</p>
        <p>Date :{moment(createdAt).format('Do MMMM YYYY')}</p>
    </div>

);

export default ExpenseListItem;