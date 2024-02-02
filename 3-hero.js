// 2024 Coding Challenge
// Day 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

function hero(bullets, dragons) {
   if (bullets >= dragons * 2) {
      return true;
   } else {
      return false;
   }
}

console.log(hero(10, 5));
console.log(hero(7, 4));
