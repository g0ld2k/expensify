import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import { Provider } from 'react-redux';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import expenseSelector from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(
    addExpense({
        description: 'Water Bill',
        amount: 4500,
    }),
);
store.dispatch(
    addExpense({
        description: 'Gas bill',
        amount: 120,
        createdAt: 1000,
    }),
);
store.dispatch(
    addExpense({
        description: 'Rent',
        amount: 109500,
    }),
);

const state = store.getState();
console.log(expenseSelector(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
