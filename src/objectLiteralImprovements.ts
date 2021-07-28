const pizza={name: 'Pepperoni', 
            price: 15,
            getName: () => {pizza.name},

};
const toppings= ['Pepperoni'];


const order= { pizza, toppings,};


console.log(order);


function createOrder(pizza: any, toppings:any){
    return  {pizza, toppings}
};


console.log(createOrder(pizza, toppings));

console.log(pizza.getName());
