let button = document.querySelector('button');

function fun1 () {
    let imie = document.getElementById("imie").value
    let nazwisko = document.getElementById("naz").value
    let telefon = document.getElementById("tel").value
  
    let napImie = document.getElementById("name")
    napImie.textContent = imie
    let napNaz = document.getElementById("surname")
    napNaz.textContent = nazwisko
    let napTel = document.getElementById("phone")
    napTel.textContent = telefon
}

button.onclick = fun1;