const firstname = document.querySelector('#first_name');
const lastname = document.querySelector('#last_name');
const tel = document.querySelector('#tel');
const submitBtn = document.querySelector('#submit-btn');
const validMessage = document.querySelectorAll('.valid-message');

const showMessage = (results) => {
  const keys = Object.keys(results);
  const values = Object.values(results);
  values.forEach((value, i) => {
    if (value === true) {
      validMessage[i].innerHTML = `<li class="success">SUCCESS: ${keys[i]} passed validation</li>`;
    } else { validMessage[i].innerHTML = `<li class="error">ERROR: ${keys[i]} failed validation</li>`; }
  });
};

const firstNameReg = /^[a-zа-яё]{1,}(?: [a-zа-яё]{1,}){0,2}?$/i;
const lastNameReg = /^[a-zа-яё_-]{1,}(?: [a-zа-яё]{1,})?$/i;
const telReg = /^\+?(38)?0{1}[1-9]{1}[0-9]{8}$/;

const validate = () => {
  if (firstname.value === '' || lastname.value === '' || tel.value === '') {
    return;
  }
  const results = {
    firstname: false,
    lastname: false,
    tel: false,
  };
  if ((firstNameReg.test(firstname.value))) {
    results.firstname = true;
  }
  if ((lastNameReg.test(lastname.value))) {
    results.lastname = true;
  }
  if (telReg.test(tel.value)) {
    results.tel = true;
    const telArr = Array.from(tel.value);
    tel.value = `+38 ${telArr.slice(3, 6).join('')} ${telArr.slice(6, 9).join('')} ${telArr.slice(9, 11).join('')} ${telArr.slice(11, 13).join('')}`;
  }
  showMessage(results);
};

submitBtn.addEventListener('click', validate);