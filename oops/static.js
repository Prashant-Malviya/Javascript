// static :- belongs to the class, not the objects
//        :- properties:- useful for  caches fixed-configuration
//        :- methods:- useful for utility functions


class Car {

    static numberOfCars = 0; //

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log("3...2...1...Go");
        
    }
}

const car1 = new Car("Mustang");

const car2 = new Car("Corvette");

const car3 = new Car("BMW");

console.log(Car.numberOfCars);

Car.startRace()

//Math.round() here math is a class and round is a method , so this is a static method
