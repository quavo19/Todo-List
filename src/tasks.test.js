const ListTasks = require('./index1.js');

document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <meta content="0; url=https://trast00.github.io/Minimalist-todo/dist/index.html">
  <script src="https://kit.fontawesome.com/a1c06e2fcd.js" crossorigin="anonymous"></script>
  <title>Minismalist To Do List</title>
</head>
<body>
  <main>
    <div id="title2" class="title">
      <h1>Today's To Do</h1>
      <i class="fa-solid fa-repeat"></i>
    </div>
    <form>
      <label for="newtask">
        <input class="addtask" type="text" placeholder="Add to your list..." name="newtask" id="newtask">
      </label>
    </form>
    <ul id="list-task">
    </ul>
    <button id="btn-clear-task">Clear all completed</button>
  </main>
</body>
</html>`;

describe('add an item ', () => {
  const list = new ListTasks();
  test('Add normal task', () => {
    list.add('task 1');
    expect(list.list).toHaveLength(1);
  });
});

describe('delete one item ', () => {
  test('should delete one todo task test1', () => {
    const list = new ListTasks();
    list.add('lorem ipsum');
    list.delete(1);
    expect(list.list).toHaveLength(0);
  });
});

describe('delete all ', () => {
  test('should edit targeted task', () => {
    const list = new ListTasks();
    list.add('lorem ipsum 1');
    const input = document.getElementById(1).querySelector('.task-description');
    input.value = 'We have to finished testing';
    list.onEdit(input);
    expect(list.list[0].description).toBe('We have to finished testing');
  });
});