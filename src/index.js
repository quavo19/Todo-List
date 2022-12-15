// eslint-disable-next-line import/no-cycle
import clean from './clear-all.js';
import './style.css';

const storage = () => {
  const todosArr = JSON.parse(localStorage.getItem('deeds')) || [];
  return todosArr;
};

export { storage as default };

class Todo {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
const pushtodo = () => {
  const todosArr = storage();
  const index = todosArr.length;
  const description = document.getElementById('input').value;
  const completed = false;
  const todoList = new Todo(description, completed, index);
  if (description !== '') {
    todosArr.push(todoList);
    localStorage.setItem('deeds', JSON.stringify(todosArr));
  }
};

const Dynamic = document.querySelector('.todo-maker');
const todos2 = () => {
  const todosArr = storage();
  Dynamic.innerHTML = '';
  for (let i = 0; i < todosArr.length; i += 1) {
    const isComplte = todosArr[i].completed === true ? 'checked' : '';
    Dynamic.innerHTML += `
        <div class="list ${isComplte}">
                <div class="list-action">
                    <input class ="check" id ="${todosArr[i].index}" ${isComplte} type="checkbox">
                    <p id ="${todosArr[i].index}" contenteditable="true"class="p">${todosArr[i].description}</p>
                </div>
                <div class="action-container">
                    <div class="icon"><i id = "${todosArr[i].index}" class="fa-solid fa-ellipsis-vertical line"></i> <i id = "${todosArr[i].index}" class="fa-solid fa-trash remove"></i></div>
                </div>
            </div>
            `;
  }
};

todos2();

// checkbox updates
const checked = document.querySelectorAll('.check');
checked.forEach((button) => {
  button.addEventListener('click', (e) => {
    const todosArr = storage();
    const card = e.path.filter((el) => el.classList?.contains('list')).at(0);
    if (button.checked) {
      card.classList.add('checked');
      todosArr[button.id].completed = true;
    } else {
      card.classList.remove('checked');
      todosArr[button.id].completed = false;
    }
    localStorage.setItem('deeds', JSON.stringify(todosArr));
  });
});

// add function
document.addEventListener('keyup', (e) => {
  const todosArr = storage();
  if (e.key === 'Enter') {
    localStorage.setItem('deeds', JSON.stringify(todosArr));
    pushtodo();
    todos2();
    window.location.reload();
  }
});
// remove function

const rmv = document.querySelectorAll('.remove');
rmv.forEach((item) => {
  item.addEventListener('click', () => {
    const todosArr = storage();
    todosArr.splice(item.id, 1);
    todosArr.forEach((todo) => {
      todo.index = todosArr.indexOf(todo);
    });
    localStorage.setItem('deeds', JSON.stringify(todosArr));
    todos2();
    window.location.reload();
  });
});

// editing tasks

const edit = document.querySelectorAll('.p');
edit.forEach((item) => {
  const todosArr = storage();
  item.addEventListener('keyup', () => {
    const des = item.textContent;
    const iD = item.id;
    todosArr[iD].description = des;
    localStorage.setItem('deeds', JSON.stringify(todosArr));
  });
});

clean();
