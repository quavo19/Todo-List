import { indexOf } from 'lodash';
import './style.css';

 const storage =()=>{
    const todosArr = JSON.parse(localStorage.getItem('deeds')) || [] ;
    return todosArr;
 }

class todo {
    constructor(description, completed = false, index){
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
}
const pushtodo = () =>{
    const todosArr = storage();
   const index = todosArr.length;
   const description = document.getElementById('input').value;
   const completed = false;
   const todoList = new todo(description,completed,index);
   if(description != ''){
    todosArr.push(todoList);
    localStorage.setItem('deeds', JSON.stringify(todosArr));
   }
}

const Dynamic = document.querySelector('.todo-maker');
let todos2=() => {
    const todosArr = storage();
    Dynamic.innerHTML = '';
    for (let i = 0; i < todosArr.length; i += 1){
        let isComplte = todosArr[i].completed == true ? "checked" : "";
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
}

todos2();

const checked = document.querySelectorAll('.check');
checked.forEach((button) => {
    const todosArr = storage();
    button.addEventListener('click', (e) => {
       const card = e.path.filter((el) => el.classList?.contains('list')).at(0);
       if(button.checked){
        card.classList.add("checked");
        todosArr[button.id].completed = true;
       } else {
        card.classList.remove("checked")
        todosArr[button.id].completed = false;
       }
       localStorage.setItem('deeds', JSON.stringify(todosArr));
    });
  });

document.addEventListener('keyup', (e) => {
    const todosArr = storage();
    if (e.key === 'Enter') {
        localStorage.setItem('deeds', JSON.stringify(todosArr));
         pushtodo();
         todos2();
         window.location.reload();
        console.log(Dynamic)
    }
});

const rmv = document.querySelectorAll('.remove');
 rmv.forEach((item) => {
  item.addEventListener('click', (e) => {
    let todosArr = storage();
     todosArr.splice(item.id, 1);
     todosArr.forEach((todo) => {
        todo.index = todosArr.indexOf(todo);
     });
     localStorage.setItem('deeds', JSON.stringify(todosArr));
     todos2();
     location.reload();
      });
});

// editing tasks

const edit = document.querySelectorAll('.p');
 edit.forEach((item) => {
    let todosArr = storage();
    item.addEventListener('keyup', (e) => {
    let des = item.textContent
    let iD =  item.id ;
    todosArr[iD].description = des;
    localStorage.setItem('deeds', JSON.stringify(todosArr));
    });
});
