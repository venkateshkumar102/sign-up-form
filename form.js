const form = document.forms["forms"];
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit',e=>{
    e.preventDefault()
});