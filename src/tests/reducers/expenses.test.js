import moment from 'moment';

import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1,
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: 4,
        description: 'Mug',
        note: 'I broke the old one',
        amount: 1495,
        createdAt: moment(0)
            .add(5, 'days')
            .valueOf(),
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense,
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const updates = {
        id: 1,
        description: 'Mug',
        note: '',
        amount: 1395,
        createdAt: 0,
    };
    const action = { type: 'EDIT_EXPENSE', id: updates.id, updates };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([updates, expenses[1], expenses[2]]);
});

test('should not edit expense if expense not found', () => {
    const updates = {
        id: -1,
        description: 'Mug',
        note: '',
        amount: 1395,
        createdAt: 0,
    };
    const action = { type: 'EDIT_EXPENSE', id: updates.id, updates };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});
