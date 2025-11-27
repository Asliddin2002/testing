export const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const operators = ['+', '-', '*', '/'];
export function calculate(operand1, operator, operand2) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}
export class Calculator {
  constructor() {
    this.state = { current: '', previous: '', operator: '' };
  }
  input(a) {
    const splited = a.split('');
    for (const command of splited) this.inputCheck(command);
  }
  inputCheck(command) {
    const { state } = this;
    if (numbers.includes(command)) {
      if (state.operator && !state.previous) {
        state.previous = state.current;
        state.current = command;
      } else state.current += command;
    }
    if (operators.includes(command)) {
      if (!state.operator) state.operator = command;
      else {
        state.current =
          calculate(
            state.previous ? Number(state.previous) : 0,
            state.operator,
            state.current ? Number(state.current) : 0,
          ) + '';
        state.previous = '';
      }
      state.operator = command;
    }
    if (command === '=') {
      state.current =
        calculate(
          state.previous ? Number(state.previous) : 0,
          state.operator,
          state.current ? Number(state.current) : 0,
        ) + '';
      state.previous = '';
      state.operator = '';
    } else if (command === '.') {
      if (state.current.indexOf('.') === -1) {
        state.current = state.current ? state.current + '.' : '0.';
      }
    }
  }
  clear() {
    this.state.current = '';
    this.state.previous = '';
    this.state.operator = '';
  }
}
