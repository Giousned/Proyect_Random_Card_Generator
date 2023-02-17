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

  // function addTimer() {
  //   botonTimer.innerHTML = "Timer Loading...";
  //   console.log("In 10 sec Reload");
  // }

  function addTimer() {
    let time = 5;
    let timer = setInterval(function() {
      if (time > 0) {
        time--;
        botonTimer.disabled = true;
        botonTimer.innerHTML = "Reload in " + time + " seconds...";
      }
      if (time === 0) {
        botonTimer.disabled = false;
        botonTimer.innerHTML = "Click Me Again!";
        crearCarta();
        clearInterval(timer);
      }
    }, 250);
  }

  let botonSubmit = document.getElementById("botonSubmit");
  let crearAlert = document.getElementById("alert");

  function clickbutton() {
    // simulamos el click del mouse en el boton del formulario
    document.getElementById("botonSubmit").click();
  }

  let stop = 0;

  function alert(message) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      "</div>"
    ].join("");

    stop += 1;

    crearAlert.append(wrapper);
  }

  function selectSize() {
    // let cartaSize = document.querySelector(".card");
    let inputElements = document.getElementsByTagName("input");

    // Execute a function when the user presses click on mouse
    botonSubmit.addEventListener("click", function(event) {
      // Cancel the default action, if needed (NO LO SÉ LA VERDAD SI HACE FALTA, CREO QUE NO, PORQUE NO ES UN SUBMIT)
      event.preventDefault();

      if (
        (inputElements[0].value < 200 || inputElements[1].value < 200) &&
        stop !== 1
      ) {
        alert("Minimum allowed values up to 200");
        event.preventDefault();
      } else if (
        inputElements[0].value >= 200 &&
        inputElements[1].value >= 200
      ) {
        for (let i = 0; i < inputElements.length; i++) {
          document.querySelector(".card").style.width =
            inputElements[0].value + "px";
          document.querySelector(".card").style.height =
            inputElements[1].value + "px";
        }
        if (inputElements[1].value >= 400) {
          document.querySelector("body").style.fontSize = 4 + "em";
        } else if (inputElements[1].value >= 300) {
          document.querySelector("body").style.fontSize = 3 + "em";
        } else document.querySelector("body").style.fontSize = 2 + "em";

        crearCarta();

        botonSubmit.dataset.bsDismiss = "modal";

        clickbutton();
      }
      botonSubmit.dataset.bsDismiss = "";
    });
  }

  const boton = document.querySelector("#boton");
  boton.addEventListener("click", crearCarta);

  const botonTimer = document.querySelector("#botonTimer");
  botonTimer.addEventListener("click", addTimer);

  const botonSize = document.querySelector("#botonSize");
  botonSize.addEventListener("click", selectSize);
};

//<button class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</button>
// alert("Minimum allowed values equal to 200"); // NO SE COMO PONER ALERTAS O MENSAJES CON EL MODAL O QUE FUNCIONEN LOS REQUERIMIENTOS DE LOS INPUTS DEL MODAL
// botonSubmit.dataset.bsDismiss = "";
// event.preventDefault();
