const Loginput = document.querySelector("#Log-in input");
const loginForm = document.querySelector("#Log-in");
const greeting = document.querySelector("h1");


const HIDDEN_CLASS = "hidden";
const USER_NAME = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = Loginput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USER_NAME,username);
    greetings(username);
}

function greetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const saveitem = localStorage.getItem(USER_NAME);

if(saveitem === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    greetings(saveitem);
}
