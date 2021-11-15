function getFood() {
	fetch("http://localhost:3000/foods")
		.then(r => r.json())
		.then(addAllFoodsToList)
		.catch(console.warn);
}

function addFood(e) {
	e.preventDefault();

	const ingredientsString = e.target.ingredients.value;
	const ingredientsArr = ingredientsString.split(", ");

	const foodData = {
		name: e.target.name.value,
		ingredients: ingredientsArr
	};

	const options = {
		method: "POST",
		body: JSON.stringify(foodData),
		headers: {
			"Content-Type": "application/json"
		}
	};

	fetch("http://localhost:3000/foods", options)
		.then(r => r.json())
		.then(addToFoodList)
		.catch(console.warn);

	location.reload();
}

function retrieveFood(e) {
	const food = e.target.id;
	console.log(typeof food);
	fetch(`http://localhost:3000/foods/${food}`)
		.then(r => r.json())
		.then(displayFood)
		.catch(console.warn);
}

function displayFood(data) {
	console.log(data);
	const nameSpan = document.querySelector("#nameSpan");
	const ingSpan = document.querySelector("#ingredientsSpan");
	nameSpan.textContent = data.name.toLowerCase();
	ingSpan.textContent = data.ingredients.join(", ");
}

function addToFoodList(data) {
	let option = document.createElement("option");
	option.setAttribute("value", data.name.toLowerCase());
	option.setAttribute("id", data.name.toLowerCase());
	option.textContent = data.name;
	option.addEventListener("click", retrieveFood);
	let list = document.querySelector("#foodsList");
	list.append(option);
}

function addAllFoodsToList(data) {
	data.forEach(addToFoodList);
}

module.exports = { addFood, retrieveFood, getFood };
