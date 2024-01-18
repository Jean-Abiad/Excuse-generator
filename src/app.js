/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    let theExcuse = () => {
    let who = [
      "mi padre", "la tortuga", "el perro", "mi vecino", "Samuel", "Bolivar",];
    let action = [
      "comio", "espropio", "robo", "destrozo", "rompio", "perdio","escondio", "bataqueo", "robo" , "se espropio"];
    let what = [
      "mi tarea", "la comida", "mi celular", "las llaves", "el carro", "la nave", "el generador de excusas",];
    let when = [
      "despues de clases", "Mientras cagaba", "cuando estaba hablando", "cuando dormia", "cuando me fui", "durante el almuerzo", "mientras jugaba",];

    let quien = Math.floor(Math.random() * who.length);
    let accion = Math.floor(Math.random() * action.length);
    let que = Math.floor(Math.random() * what.length);
    let cuando = Math.floor(Math.random() * when.length); 

    return who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando]

  }
  let excusa = theExcuse();
  console.log(excusa);
};
