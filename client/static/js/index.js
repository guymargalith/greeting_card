// const { retrieveFood } = require("./app");

const inputForm = document.querySelector("#inputform");
const selectForm = document.querySelector("#foodsList");

inputForm.addEventListener("submit", addFood);
selectForm.addEventListener("change", retrieveFood);

getFood();