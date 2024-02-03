// 2024 Coding Challenge
// Day 5/366
// https://codewars.com/kata/5861d28f124b35723e00005e/train/javascript

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    return distanceToPump / mpg <= fuelLeft;
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    return mpg * fuelLeft >= distanceToPump;
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
