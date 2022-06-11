// saber as horas
// dividir cada parte da hora
// passar isso para o html

function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let hours = document.getElementById("hour").innerHTML = h;
    let minutes = document.getElementById("minutes").innerHTML = m;
    let seconds = document.getElementById("seconds").innerHTML = s;
}

var interval = setInterval(clock, 1000);