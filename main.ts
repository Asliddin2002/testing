const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/'];

function calculate(
  operand1: number,
  operator: string,
  operand2: number,
): number {
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
  state = {
    current: '',
    previous: '',
    operator: '',
  };

  input(a: string) {
    const splited = a.split('');

    for (const command of splited) {
      this.inputCheck(command);
    }
  }

  inputCheck(command: string) {
    const { state } = this;

    if (numbers.indexOf(command) >= 0) {
      if (state.operator && !state.previous) {
        state.previous = state.current;
        state.current = command;
      } else {
        state.current += command;
      }
    }
    if (operators.indexOf(command) >= 0) {
      if (!state.operator) {
        state.operator = command;
      } else {
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
        if (!state.current) {
          state.current = '0' + command;
        } else {
          state.current += command;
        }
      }
    }
  }
}
