// REACT - EXPENSIFY APPLICATION

import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';
import 'normalize.css';
import './Styles/styles.scss';

//REDUX IMPORT 
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selector/expenses';


const store = configureStore();


store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
//store.dispatch(addExpense({ description: 'Gas bill', amount: 1300 }));
//store.dispatch(addExpense({ description: 'Rent bill', amount: 5300 }));
//store.dispatch(setTextFilter('water'));



// GETTING STATE 
const state = store.getState();
console.log(state);
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);

//COMPONENTS RENDER
ReactDOM.render(jsx, document.getElementById("root"));
