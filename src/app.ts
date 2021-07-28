// //<---------------------Type aliases

// // let pizzaSize: 'small'|'medium'|'large' = 'small';

// // const selectSize = (size: 'small'|'medium'|'large' ) => {pizzaSize= size;};

// // selectSize('small');



// type Size = 'small'|'medium'|'large';

// type Callback = (size: Size)=>void; 

// let pizzaSize: Size = 'small';

// const selectSize: Callback = (x)=> {pizzaSize= x;};

// selectSize('medium');


//<---------------------Type Assertions

type Pizza = {name: string, toppings: number};

const pizza: Pizza ={name: 'blazing inferno', toppings: 5};

const serializedConstant = JSON.stringify(pizza);

function getNameFromJSON(obj: string){
    //Old way to do it
    //return (<Pizza>JSON.parse(obj)).name;
    //new way
    return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serializedConstant);

