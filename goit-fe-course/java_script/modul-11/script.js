//const resTable = document.querySelector('.resultTable');
const tmpl = document.querySelector('#template-part');
const html = document.querySelector('#tbl_tmpl').textContent.trim();
const compiled = _.template(html);

const createTable = (userObj) => {

  let structure = '';
  userObj.forEach((item) => {
    structure += compiled(item);
  });
  //resTable.style.display = 'table';
  tmpl.innerHTML = structure;
};

const user = document.querySelector('.user');
const allBtn = document.querySelector('.allBtn');

const getAllUsers = () => {
  fetch('https://test-users-api.herokuapp.com/users/')
    .then(response => {
      if(response.ok) return  response.json();
      throw new Error("Error fetching data");
    })
    .then(users => {
      createTable(users.data);
    });
}

const idInput = document.querySelector('#getId');

const getUserById = (id) => {
  if (idInput.value === '') { alert('Enter ID'); return; }
  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .then(user => {
      tmpl.innerHTML = compiled(user.data);
    })
    .catch(error => {
      console.error("Error: ", error);
    });
};

 
const newName = document.querySelector('#newName');
const newAge = document.querySelector('#newAge');

const addUser = (name, age) => {  
  if (newName.value === '' || newAge.value === '') { alert('Enter all information'); return; }
  if(!isNaN(newName.value) || isNaN(newAge.value) ||newAge.value < 0) {
    alert('Something wrong'); 
    return;
  }
  fetch('https://test-users-api.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({ name: newName.value, age: newAge.value}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then(() => {
      alert ('User added');
    })
}

const idToRemove = document.querySelector('#delUser');

const removeUser = (id) => {
  if (idToRemove.value === '') { alert('Enter ID'); return; }
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      //idToRemove.value = '';
      alert ('User deleted');
    });
};

const changeName = document.querySelector('#changeName');
const changeAge = document.querySelector('#changeAge');
const editId = document.querySelector('#editId');

const updateUser = (id) => {
  
  if(!isNaN(changeName.value) || isNaN(changeAge.value) || changeAge.value < 0) {
    alert('Enter all new information'); 
    return;
  }
  
  if (editId.value === '') { alert('Enter ID'); return; }
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name: changeName.value, age: changeAge.value}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(() => {
    alert('Data updated');
  });
};


const onClick = (evt) => {
  if (evt.target.classList.contains('allBtn')) {
    getAllUsers();
  }
  if (evt.target.classList.contains('searchBtn')) {
    getUserById(idInput.value);
  }
  if (evt.target.classList.contains('addBtn')) {
    addUser();
  }
  if (evt.target.classList.contains('deleteBtn')) {
    removeUser(idToRemove.value);
  }
  if (evt.target.classList.contains('editBtn')) {
      updateUser(editId.value);
  }
}; 


document.addEventListener('click', onClick);