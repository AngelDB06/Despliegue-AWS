const sumar = require('./script');

describe('Pruebas para la función sumar', () => {
    test('debería sumar dos números positivos', () => {
        expect(sumar(1, 2)).toBe(3);
    });
});