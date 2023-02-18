interface Todo {
    text: string,
    completed: boolean
}

const todos: Todo[] = []

//NON-null assertion operator "!"
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById('todoInput')! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.querySelector("#todoList")!;

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo)
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

