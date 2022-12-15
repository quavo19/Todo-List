class ListTasks {
  constructor() {
    this.list = [];
  }

  add = (description, completed = false, index = this.list.length + 1) => {
    const task = { description, completed, index };
    this.list.push(task);
    this.display(task);
  }

  onEdit = (event) => {
    const { id } = event.parentElement.parentElement;
    const litask = document.getElementById(id);
    litask.style.backgroundColor = 'white';

    this.list[id - 1].description = event.value;
    const iDelete = event.parentElement.nextSibling;
    const iMenu = event.parentElement.nextSibling.nextSibling;

    setTimeout(() => {
      iMenu.classList.remove('hidden');
      iDelete.classList.add('hidden');
    }, 200);
  }

  display = (task) => {
    const ulListTask = document.getElementById('list-task');
    const liTask = document.createElement('li');
    liTask.classList.add('task');
    liTask.id = task.index;
    const divTaskContent = document.createElement('div');
    divTaskContent.classList.add('task-content');
    const checkBok = document.createElement('input');
    checkBok.type = 'checkbox';
    checkBok.name = task.index;
    const inTaskDescription = document.createElement('input');
    inTaskDescription.classList.add('task-description');
    inTaskDescription.value = task.description;
    inTaskDescription.type = 'text';
    checkBok.addEventListener('change', (event) => {
      const { id } = event.currentTarget.parentElement.parentElement;
      if (event.currentTarget.checked) {
        event.currentTarget.nextSibling.style.textDecoration = 'line-through';
        this.list[id - 1].completed = true;
      } else {
        event.currentTarget.nextSibling.style.textDecoration = 'none';
        this.list[id - 1].completed = false;
      }
    });

    if (task.completed) {
      checkBok.click();
      inTaskDescription.style.textDecoration = 'line-through';
    }

    inTaskDescription.addEventListener('focus', (event) => {
      const { id } = event.currentTarget.parentElement.parentElement;
      document.getElementById(id).style.backgroundColor = 'rgb(156, 156, 255)';
      const iDelete = event.currentTarget.parentElement.nextSibling;
      const iMenu = event.currentTarget.parentElement.nextSibling.nextSibling;
      iDelete.classList.remove('hidden');
      iMenu.classList.add('hidden');
    });
    inTaskDescription.addEventListener('focusout', (e) => {
      this.onEdit(e);
    });
    divTaskContent.append(checkBok);
    divTaskContent.append(inTaskDescription);
    const iMenu = document.createElement('i');
    iMenu.classList.add('fa-solid', 'fa-ellipsis-vertical');
    const iDelete = document.createElement('i');
    iDelete.classList.add('fa-solid', 'fa-trash', 'hidden');
    iDelete.addEventListener('click', (event) => {
      const { id } = event.currentTarget.parentElement;
      this.delete(id);
    });
    liTask.append(divTaskContent);
    liTask.append(iDelete);
    liTask.append(iMenu);
    ulListTask.append(liTask);
  }

  delete = (idDeleted) => {
    this.list = this.list.filter((task) => task.index !== this.list[idDeleted - 1].index);
    document.getElementById(idDeleted).remove();
    this.updateIndexs();
  }

  updateIndexs = () => {
    let index = 1;
    this.list.forEach((task) => {
      const liTask = document.getElementById(task.index);
      liTask.id = index;

      task.index = index;
      index += 1;
    });
  }

  clearAll = () => {
    this.list.forEach((task) => {
      if (task.completed) {
        document.getElementById(task.index).remove();
      }
    });

    this.list = this.list.filter((task) => !task.completed);
    this.updateIndexs();
  }
}

module.exports = ListTasks;