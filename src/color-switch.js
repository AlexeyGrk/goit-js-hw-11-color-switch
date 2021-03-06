const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action=start]'),
  stopBtn: document.querySelector('button[data-action=stop]'),
};
let intervalColor = null;
let isActive = false;

function changeBodyRandomColor() {
  refs.startBtn.disabled = true;
  intervalColor = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    //   console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
    isActive = true;
  }, 1000);
}
function clearIntervalColor() {
  isActive = false;
  refs.startBtn.disabled = false;
  clearInterval(intervalColor);
}
refs.startBtn.addEventListener('click', changeBodyRandomColor);
refs.stopBtn.addEventListener('click', clearIntervalColor);
