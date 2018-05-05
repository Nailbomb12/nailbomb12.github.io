const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount: '',
  setCharCount(){
    let enterNumb;
    while (true){
      enterNumb = prompt('Enter some number','');
      
      if (enterNumb === null) return;
      if (this.checkPositiveInteger(+enterNumb)) break;
    }
    this.charCount = +enterNumb;
  },
  checkPositiveInteger(data){
    if ((Number.isInteger(data)) && data > 0){
      return true;
    }
  },
  task: '',
  createTask () {
    const arr = new Array(this.charCount);
    for (let i = 0; i < this.charCount; i++) {
      //debugger;
      arr[i] = this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    this.task = arr;
  },
  startTask () {
    let symb = prompt(`Enter srtring:  ${this.task.join('')} `);
    if (symb === null) return;
    this.userInput = symb.split('');
  },
  
  userInput:'',
  userErrors:'',
  
  findError () {
    let counter = 0;
    for (let i = 0; i < this.task.length; i++){
      if (this.userInput[i] !== this.task[i]){
        counter++;
      }
    }
    this.userErrors = counter;
    
    if (this.userErrors === 0){
      alert ('Excellent!')
    } else {
      alert (`${this.userErrors} mistakes`)
    }
  },
}

const run = (obj) => {
  obj.setCharCount();
  if (obj.charCount === "") return;
  obj.createTask();
  obj.startTask();
  obj.findError();
};

run(keyTrainer);