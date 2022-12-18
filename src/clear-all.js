// eslint-disable-next-line import/no-cycle
import storage from './index.js';

const clean = () => {
  const clearButton = document.querySelector('.clean');
  clearButton.addEventListener('click', () => {
    const todosArr = storage();
    const done = todosArr.filter((todosArr) => todosArr.completed);
    const id = done.forEach((element) => {
      todosArr.splice(element.index, 1);
      todosArr.forEach((todo) => {
        todo.index = todosArr.indexOf(todo);
      });
    });
    localStorage.setItem('deeds', JSON.stringify(todosArr));
    window.location.reload();
    return id;
  });
};

export { clean as default };