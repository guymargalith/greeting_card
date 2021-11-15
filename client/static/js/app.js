function addFood(e){
    e.preventDefault();

    const ingredientsString = e.target.ingredients.value;
    const ingredientsArr = ingredientsString.split(', ');
    
    const foodData = {
        name: e.target.name.value,
        ingredients: ingredientsArr
    };

    console.log(foodData);

    const options = {
        method: "POST",
        body: JSON.stringify(foodData),
        headers: {
            "Content-Type": "application/json"
        }
    }

    console.log(options)

    fetch('http://localhost:3000/foods', options)
        .then(r => r.json())
        .then(data => console.log(data))
        .catch(console.warn)

}

function retrieveFood(e){
    const food = e.target.id;
    console.log(typeof(food));
    fetch(`http://localhost:3000/foods/${food}`)
        .then(r => r.json())
        .then(displayFood)
        .catch(console.warn)
}

function displayFood(data){
    const para = document.createElement('p');
    para.textContent = `Name: ${data.name}\n ingredients: ${data.ingredients.join(", ")}`;
    document.body.appendChild(para);

}



module.exports = {addFood, retrieveFood}