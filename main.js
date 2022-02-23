let imie = document.getElementById("imie").textContent.value;
let nazwisko = document.getElementById("naz").value;
let telefon = document.getElementById("tel").value;

function fun() {
    let napImie = document.querySelector('p#name');
    napImie.textContent = imie;
    let napNaz = document.querySelector('p#surname');
    napNaz.textContent = nazwisko; 
    let napTel = document.querySelector('p#phone');
    napImie.textContent = telefon;  
}
fun();
