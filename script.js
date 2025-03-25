// write js code here if required

let p = document.getElementById("timer");
let now = new Date();

p.textContent = `${now.getDay()}/${now.getMonth()}/${now.getYear()}, ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;