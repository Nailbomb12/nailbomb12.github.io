const timerOutput = document.querySelector(".timer");
const string = "qwerty";
const keyboard = document.querySelector('.keyboard').innerHTML = `Enter "${string}"`
const score = document.querySelector('.score');
const input =  document.querySelector('#inp_text');
input.setAttribute('maxlength',`${string.length}`)

let secondsValue = 0;
let interval;

const startExercise = () => {
  if(typeof interval !== 'number'){
		interval = setInterval(() => {
			timerOutput.innerHTML = ++secondsValue / 100;
      
      if (input.value == string){
        clearInterval(interval);
        
        alert (`You've done in ${secondsValue / 100} seconds\n${countKPS()} keys per second `);
        
        setToLocalStorage();
        score.innerHTML = localStorage.getItem('bestResult');
      }
		}, 10);
	}
}

const countKPS = () => {
  const counter =  (string.length / (secondsValue/100)).toFixed(2);
  return counter;
} 

const setToLocalStorage = () => {
  if (localStorage.getItem('bestResult') === null) { 
    localStorage.setItem('bestResult', secondsValue/100); 
  }
  if (secondsValue/100 < localStorage.getItem('bestResult')) { 
    localStorage.setItem('bestResult', secondsValue/100); 
  }
};

const setScorageToHTML = () => {
   score.innerHTML = localStorage.getItem('bestResult');
}
setScorageToHTML();

input.addEventListener("keydown", startExercise);

