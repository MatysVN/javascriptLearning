const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']



console.log('Slice');
const numbers2 = numbers.slice(0,2)
console.log(numbers2);
//nie musimy podawać wszystkich elementów jeden też zadziała
const numbers3 = numbers.slice(-3)
console.log(numbers3);



console.log('------');
console.log('Splice');
const randomStuff = colors.splice(3,2)
console.log(colors);
console.log(randomStuff);



console.log('------');
const newCars = cars.splice(2,4, 'test')
console.log(cars);
console.log(newCars);