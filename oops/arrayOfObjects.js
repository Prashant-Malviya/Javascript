class Car {

    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang",2023,"black");
const car2 = new Car("Corvette",2024,"yellow");
const car3 = new Car("Lambo",2022,"red");

const cars = [car1,car2,car3]

// console.log(cars[0]);


startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}