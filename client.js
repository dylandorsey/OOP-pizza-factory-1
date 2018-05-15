class Order   {
    constructor(pizzasArray)   {
        this.order = pizzasArray;
    }
    calcOrderCost()    {
        for(let i=0; i > this.order.length; i++)   {
            this.orderPrice += pizza.price;
        }
        // console.log(this.orderPrice);
    }
}

//FINISH CLASS ORDERRRRRRRRRRRRR //////////// ^^^^^^^^^^^

class Pizza {
    constructor(ingredientsArray) {
        this.sauce = 'tomato'; //anti-cheese party 2018
        this.ingredients = ingredientsArray;
        this.price = 10;
    }
    addIngredients() {
        this.price += this.ingredients.length * 0.99;
    }
}

pizza = new Pizza(['bacon', 'mushrooms', 'olives', 'anchovies']); //gross
pizzaDos = new Pizza(['cheese', 'more cheese', 'triple cheese']); //disgusting
pizzaTres = new Pizza(['cookie dough']);

pizza.addIngredients();
pizzaDos.addIngredients();
pizzaTres.addIngredients();

// console.log(pizza);

order = new Order([pizza, pizzaDos, pizzaTres]);

console.log(order);

order.calcOrderCost();
console.log(order.orderPrice);


