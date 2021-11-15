// getFood();

const form = document.querySelector("#inputform");
// const foodsList = document.querySelector("#foodsList");
// const foodsNames = foodsList.children;
// let foodsNamesList = document.querySelectorAll("#foodsList option");

function addClicks() {
	let foodsNamesList = document.querySelectorAll("#foodsList option");
	console.log(foodsNamesList);
	for (let i = 0; i < foodsNamesList.length; i++) {
		console.log(foodsNamesList[i]);
		foodsNamesList[i].addEventListener("change", retrieveFood);
	}
}
form.addEventListener("submit", addFood);

function runLists() {
	getFood();
	setTimeout(addClicks, 1000);
}

runLists();
