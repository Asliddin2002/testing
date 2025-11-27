import { Calculator } from './src/main';
describe('Calculator', () => {
  const testCases = [
    ['39 + 55', ['55', '39', '+']],
    ['.1', ['0.1', '', '']],
    ['2.1+', ['2.1', '', '+']],
    ['6 / 2', ['2', '6', '/']],
    ['9 * 4', ['4', '9', '*']],
    ['8', ['8', '', '']],
    ['80', ['80', '', '']],
    ['9 +', ['9', '', '+']],
    ['91 +', ['91', '', '+']],
    ['1 + 5 =', ['6', '', '']],
    ['14 + 56 =', ['70', '', '']],
    ['3.1 + 2.9 =', ['6', '', '']],
    ['1.5 + 1.7 =', ['3.2', '', '']],
    ['1.2 + 1.3 + ', ['2.5', '', '+']],
    ['12.9 + 3.1 + 3', ['3', '16', '+']],
    ['12.9 + 3.1 + 3 =', ['19', '', '']],
  ];
  for (const [input, [current, previous, operator]] of testCases) {
    it(`${input} => c:${current}, p:${previous}, o:${operator}`, () => {
      const calc = new Calculator();
      calc.input(input);
      expect(calc.state).toEqual({ current, previous, operator });
    });
  }
});
