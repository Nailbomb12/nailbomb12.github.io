function Timer() { 
  this.startTime = '';
  this.stopTime = '';
  this.interval = '';
}
 
const timer = new Timer(); 

Timer.prototype.Start = function Start() { 
  this.startTime = Date.now();
};
Timer.prototype.Stop = function Stop() { 
  this.stopTime = Date.now();
  this.interval = ((this.stopTime - this.startTime)/1000).toFixed(2); 
};

const onClick = (evt) => {
  if (evt.target.classList.contains('start-btn')) {
    timer.Start();
  }
  if (evt.target.classList.contains('stop-btn')) {
    timer.Stop();
    console.log(`${timer.interval} seconds.`);
  }
};

document.addEventListener('click', onClick);