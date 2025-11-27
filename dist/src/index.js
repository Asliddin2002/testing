import { Calculator } from './main.js';
const calc = new Calculator();
const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const keys = [
  '7',
  '8',
  '9',
  '/',
  '4',
  '5',
  '6',
  '*',
  '1',
  '2',
  '3',
  '-',
  '0',
  '.',
  '=',
  '+',
];
keys.forEach((key) => {
  const btn = document.createElement('button');
  btn.textContent = key;
  btn.onclick = () => {
    calc.input(key);
    display.value = calc.state.current;
  };
  buttons.appendChild(btn);
});
const clearBtn = document.getElementById('clear');
if (clearBtn) {
  clearBtn.onclick = () => {
    calc.clear();
    display.value = calc.state.current;
  };
}
