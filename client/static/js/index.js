// const app = require("./app");

const form = document.querySelector("form");
const burrito = document.querySelector("#burrito");
const taco = document.querySelector("#taco");
const fajita = document.querySelector("#fajita");

form.addEventListener("submit", addFood);
// burrito.addEventListener("click", retrieveFood);
// taco.addEventListener("click", retrieveFood);
// fajita.addEventListener("click", retrieveFood);

getFood();
