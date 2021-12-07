
export default (expense) => {
    if (expense.length === 0) {
        return 0;
    } else {
        return expense
            .map((expense) => expense.amount)
            .reduce((sum, value) => sum + value, 0);
    }
}