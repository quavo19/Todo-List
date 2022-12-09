import storage from './index.js';
const clean = () =>{
const clearButton = document.querySelector('.clean');

const checked = document.querySelectorAll('.checked');

clearButton.addEventListener('click', () => {
    let todosArr = storage();
    const done = todosArr.filter(todosArr => todosArr.completed);
    const id =  done.forEach(element => {
        console.log(element.index);
        todosArr.splice(element.index, 1)
        todosArr.forEach((todo) => {
            todo.index = todosArr.indexOf(todo);
         });
        });
        localStorage.setItem('deeds', JSON.stringify(todosArr));
        window.location.reload();
    return id;
    })
 }

export { clean as default }