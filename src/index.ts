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

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo)

    localStorage.setItem("todos", JSON.stringify(todos))
    input.value = ''
}

function createTodo(todo: Todo){
    const newLI = document.createElement('li')
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox"
    newLI.append(todo.text)
    newLI.append(checkBox)
    list?.append(newLI)

}

form.addEventListener("submit", handleSubmit)

// btn.addEventListener("click", function() {
//      alert(input.value);
//      input.value = '';
// });



// let mystery: unknown = "hello World!"
// type assertion "as"
// const numChars = (mystery as string).length

