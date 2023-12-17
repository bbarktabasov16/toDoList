// let body = document.body
// let a = document.createElement('a')
// a.innerHTML = '...'
// body.prepend(a)
// console.log(body)

// createElement - создать элемент
// prepend - добавить в начало
// append - добавить к концу

const maxTasks = 5;

let container = document.getElementById('container')
let title = document.createElement('h1')
title.innerHTML = 'to do list'
container.prepend(title)

const createTodo = () => {

    let input = document.getElementById('todoText').value
    let todo = document.createElement('li')
    todo.append(input)
    olText.append(todo)
    console.log(todo)

    if (input === '') {
        alert('Введите текст задачи!');
        return;
    }

    const taskInput = document.getElementById('todoText');
    const taskList = document.getElementById('olText');

    if (taskList.children.length > maxTasks) {
        alert(`Максимальное количество задач (${maxTasks}) достигнуто!`);
        return;
    }
}