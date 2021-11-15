const foodData = require('../data');

class Food {
    constructor(data){
        this.name = data.name;
        this.ingredients = data.ingredients;
    }

    static get all() {
        const foods = foodData.map((food) => new Food(food));
        return foods;
    }

    static findByName(name) {
        try {
            const aFoodData = foodData.filter((food) => food.name.toLowerCase() === name)[0];
            const food = new Food(aFoodData);
            return food;
        } catch(err){
            throw new Error("That food isn't real");
        };
    };

    static create(food){
        const newFood = new Food({...food});
        foodData.push(newFood);
        return newFood;
    };

}

module.exports = Food;