import uuid from 'uuid';

export const addExpense = (
    {
        description = '',
        amount = 0,
        note = '',
        createdAt = 0

    } = {}) => {
    return ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            amount,
            note,
            createdAt
        }
    });
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
