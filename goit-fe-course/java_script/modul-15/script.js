class Timer {
  constructor(startTime, stopTime, interval) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
  }
  start() {
    this.startTime = Date.now();
  }
  stop() {
    this.stopTime = Date.now();
    this.interval = ((this.stopTime - this.startTime) / 1000).toFixed(2);
  }
  getTime() {
    console.log(`${this.interval} seconds.`);
  }
  static get timeToNY() {
    const today = new Date();
    const mskInDay = 24*60*60*1000;
    const nextYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
    return Math.floor((nextYear - today) / mskInDay);
  }
}

const stopwatch = new Timer();

const onClick = (evt) => {
  if (evt.target.classList.contains('start-btn')) {
    stopwatch.start();
  }
  if (evt.target.classList.contains('stop-btn')) {
    stopwatch.stop();
    stopwatch.getTime();
  }
};

console.log(`${Timer.timeToNY} days before the New Year`);
document.addEventListener('click', onClick);