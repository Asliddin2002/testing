import { Calculator } from './main';

describe('Calculator', () => {
  const testCases = [
    ['3 + 5', ['5', '3', '+']],
    ['6 / 2', ['2', '6', '/']],
    ['9 * 4', ['4', '9', '*']],
    ['8', ['8', '', '']],
    ['9 +', ['9', '', '+']],
    ['1 + 5 =', ['6', '', '']],
  ] as const;

  for (const [input, [current, previous, operator]] of testCases) {
    it(`${input} => c:${current}, p:${previous}, o:${operator}`, () => {
      const calc = new Calculator();

      calc.input(input);

      expect(calc.state).toEqual({ current, previous, operator });
    });
  }
});
