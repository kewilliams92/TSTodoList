interface Todo {
    text: string,
    completed: boolean
}

//NON-null assertion operator "!"
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById('todoInput')! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.querySelector("#todoList")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo)

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if(todosJSON === null) return [];
    return JSON.parse(todosJSON)
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo)

    saveTodo();
    input.value = ''
}

function createTodo(todo: Todo){
    const newLI = document.createElement('li')
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox"
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", function(){
        todo.completed = checkBox.checked;
        saveTodo()
    })

    newLI.append(todo.text)
    newLI.append(checkBox)
    list?.append(newLI)

}

form.addEventListener("submit", handleSubmit)
