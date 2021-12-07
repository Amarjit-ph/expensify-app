const add = (a, b) => a + b;

test('should Add two number', () => {
    const result = add(3, 4);

    if (result !== 7) {
        throw new Error(` you added 3 and 4. The result was ${result} Expect 7`);
    }
});