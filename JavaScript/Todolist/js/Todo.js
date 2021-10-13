const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

const TODOS_key = "todos";
let todos = [];

function settodos(){
    localStorage.setItem(TODOS_key, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    todos = todos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    settodos();
}

function Appendtodo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
}

function handletodoform(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    const newtodoObj = {text:newtodo, id:Date.now()};
    todoInput.value = "";
    todos.push(newtodoObj);
    Appendtodo(newtodoObj);
    settodos();
}

todoForm.addEventListener("submit",handletodoform);

const savedtodo = localStorage.getItem(TODOS_key);
if(savedtodo !== null){
    const parsesave = JSON.parse(savedtodo);
    todos = parsesave;
    parsesave.forEach(Appendtodo);
}
