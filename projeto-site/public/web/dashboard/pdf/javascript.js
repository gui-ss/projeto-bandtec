let dia = new Date().getDate();
let mes = new Date().getMonth() + 1;
let ano = new Date().getFullYear();

let horaa = new Date().getHours();
let minuto = new Date().getMinutes();
let segundo = new Date().getSeconds();


data.innerHTML = `Data: ${dia}/${mes}/${ano}`;
hora.innerHTML = `Hora: ${horaa}:${minuto}:${segundo}`;