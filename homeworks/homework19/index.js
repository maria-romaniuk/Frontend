// Создайте базовый класс Transport, представляющий транспортное средство. У транспортного средства должны быть следующие свойства:
// make (марка)
// model (модель)
// year (год выпуска)
// Добавьте в класс Transport метод displayMainInfo(), который выводит всю информацию о транспортном средстве в консоль.
// Создайте два подкласса, расширяющих класс Transport:
// Car - представляет автомобиль. Дополнительные свойства:
// numDoors (количество дверей)
// isConvertible (является ли кабриолетом)
// Motorcycle - представляет мотоцикл. Дополнительные свойства:
// numWheels (количество колес)
// hasSideCar (имеет ли боковую коляску)
// Создайте по два экземпляра для классов Car и Motorcycle
// Для демонстрации результатов вызовите метод displayMainInfo() для каждого экземпляра (4 вызова).


class Transport {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayMainInfo() {
        console.log(`Transport info: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

class Car extends Transport {
    constructor(make, model, year, numDoors, isConvertible) {
        super(make, model, year);
        this.numDoors = numDoors;
        this.isConvertible = isConvertible;
    }
    displayMainInfo(){
        super.displayMainInfo();
        console.log(`Doors: ${this.numDoors}, Cabrio: ${this.isConvertible}`);
    }

}
class Motorcycle extends Transport {
    constructor(make, model, year, numWheels, hasSideCar) {
        super(make, model, year);
        this.numWheels = numWheels;
        this.hasSideCar = hasSideCar;
    }
    displayMainInfo(){
        super.displayMainInfo();
        console.log(`Wheels: ${this.numWheels}, Side car: ${this.hasSideCar}`);
    }
}

const moto1 = new Motorcycle("BMW", "650", 2010, 2, false);
const moto2 = new Motorcycle(" Aprilia", "Shiver" , 2016, 2, false);
const car1 = new Car("Peugeot", "408", 2022, 5, false);
const car2 = new Car("Range Rover" , "Evoque", 2017, 2, true );

console.log("Motorcycles:");
moto1.displayMainInfo();
moto2.displayMainInfo();

console.log("===========");
console.log("Cars:");
car1.displayMainInfo();
car2.displayMainInfo();