import './style.css';
let todosArr = [];
class todo {
    constructor(description, completed = false, index){
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
}
const pushtodo = () =>{
   const index = todo.length;
   const description = document.getElementById('input').value;
   const completed = false;
   const todoList = new todo(description,completed,index);
   if(description != ''){
    todosArr.push(todoList);
   }
}

const Dynamic = document.querySelector('.todo-maker');
console.log(todosArr)
let todos2=() => {
    Dynamic.innerHTML = '';
    for (let i = 0; i < todosArr.length; i ++){
        Dynamic.innerHTML += `
        <div class="list">
                <div class="list-action">
                    <input type="checkbox">
                    <p>${todosArr[i].description}</p>
                </div>
                <div class="action-container">
                    <div class="icon"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
            </div>
            <hr>`;
    }
}

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        pushtodo();
        todos2()
        console.log(Dynamic)
    }
});