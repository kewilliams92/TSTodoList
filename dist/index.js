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
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = '';
}
function createTodo(todo) {
    const newLI = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkBox);
    list?.append(newLI);
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function() {
//      alert(input.value);
//      input.value = '';
// });
// let mystery: unknown = "hello World!"
// type assertion "as"
// const numChars = (mystery as string).length
