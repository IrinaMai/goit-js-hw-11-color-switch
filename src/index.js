import './styles.css';


const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

const chngColor = function () {
    intervalId = setInterval(() => {
        const item = randomIntegerFromInterval(0, colors.length);
        body.style.backgroundColor = `${colors[item]}`;
    }, 1000);
    btnStart.removeEventListener('click', chngColor);
};

const stopChng = function () {
    clearInterval(intervalId);
    btnStart.addEventListener('click', chngColor);
};


btnStart.addEventListener('click', chngColor);
btnStop.addEventListener('click', stopChng)
