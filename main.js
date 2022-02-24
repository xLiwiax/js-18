let button = document.querySelector('button');
let submit = document.getElementById("submit");

function fun1 () {
    let imie = document.getElementById("imie").textContent.value;
    let nazwisko = document.getElementById("naz").value;
    let telefon = document.getElementById("tel").value;
    let napImie = document.getElementById("name");
}
function fun2 () {
    napImie.textContent = imie;
    let napNaz = document.getElementById("surname");
    napNaz.textContent = nazwisko; 
    let napTel = document.getElementById("phone");
    napTel.textContent = telefon;  
}


submit.onclick = fun1;
button.onclick = fun2;