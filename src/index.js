import './style.css';
// import './style.css';

const Dynamic = document.querySelector('.todo-maker');
const todos = [
    {
        description : "wake up from bed",
        completed : false,
        index: 0,
    },
    {
        description : "take break fast",
        completed : false,
        index: 1,
    },
    {
        description : "play apex legends",
        completed : false,
        index: 2,
    },
    {
        description : "read my books",
        completed : false,
        index: 3,
    }
]

todos.forEach((deed) => {
    const content = `
            <div class="list">
                <div class="list-action">
                    <input type="checkbox">
                    <p>${deed.description}</p>
                </div>
                <div class="action-container">
                    <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
            </div>
            <hr>`;
            Dynamic.innerHTML += content;
})