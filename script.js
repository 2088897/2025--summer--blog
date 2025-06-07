let name = "Audrey";
let age = "14";
let likesSushi = false;

function greeting(name) {
    console.log("Hello", name);
}

greeting("Audrey");

function saveName() {
    let newName = document.getElementById("greeter").value; // text field value from the user
    document.getElementById('username').textContent = newName;
    document.getElementById('greeter').value = "";
}
