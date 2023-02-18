"use strict";
//NON-null assertion operator "!"
const btn = document.getElementById("btn");
const input = document.getElementById('todoInput');
const form = document.querySelector("form");
const list = document.querySelector("#todoList");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodo();
    input.value = '';
}
function createTodo(todo) {
    const newLI = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", function () {
        todo.completed = checkBox.checked;
        saveTodo();
    });
    newLI.append(todo.text);
    newLI.append(checkBox);
    list?.append(newLI);
}
form.addEventListener("submit", handleSubmit);
