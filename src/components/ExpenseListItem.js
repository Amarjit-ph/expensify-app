import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, note }) => (

    <Link
        className="list-item"
        to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format('Do MMMM YYYY')}</span>
        </div>
        {note}
        <h3 className="list-item__data">₹{amount}</h3>

    </Link>



);

export default ExpenseListItem;