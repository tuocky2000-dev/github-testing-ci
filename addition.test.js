const { addition } = require('./addition');

test('2 + 4 = 6', () => {
    expect(addition(2, 4)).toBe(6);
})

test('23 + 60 = 83', () => {
    expect(addition(23, 60)).toBe(83);
})

test('3 + 6 = 9', () => {
    expect(addition(3, 6)).toBe(9);
})

test.each([[3, 4, 7],[5, -10, -5],[0, 2, 2]])(
    'a + b = c', (a, b, expected) => {
        expect(addition(a, b)).toBe(expected);
     }
    )