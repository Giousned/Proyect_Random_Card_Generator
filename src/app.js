/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let paloCarta = 0;
  let numeroCarta = 0;

  // const palosCartas = ["Corazones", "Picas", "Treboles", "Diamantes"];
  const palosCartas = ["♥", "♠", "♣", "♦"];
  const numerosCartas = ["As", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  function crearCarta() {
    paloCarta = Math.floor(Math.random() * 4);
    numeroCarta = Math.floor(Math.random() * 12);

    let cartaNumero = document.querySelector(".card-body");
    cartaNumero.textContent = numerosCartas[numeroCarta];

    let cartaSimbolo = document.querySelectorAll(".symbol");
    for (let i = 0; i < cartaSimbolo.length; i++) {
      cartaSimbolo[i].innerHTML = palosCartas[paloCarta];
      if (paloCarta === 0 || paloCarta === 3) {
        cartaSimbolo[i].classList.add("rojo");
      } else cartaSimbolo[i].classList.remove("rojo");
    }
  }

  const boton = document.querySelector("#boton");
  boton.addEventListener("click", crearCarta);
};

// n = 0;
// x = setInterval(function() {
//   console.log(n);
//   n++;
// }, 1000);

// console.log("Hello Rigo from the console!");
// let cartaSimbolo = document.querySelectorAll(".symbol");
// for (let i = 0; i < cartaSimbolo.length; i++) {
//   if (palosCartas[paloCarta] == 0) {
//     cartaSimbolo[i].textContent = palosCartas[paloCarta];
//   }
// }
