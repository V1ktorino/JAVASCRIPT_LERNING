var car = {};

Object.defineProperty(car, 'doors', {

    writable: false,
    value: 4
});

console.log(car.doors);

car.doors = 5;

console.log(car.doors);
