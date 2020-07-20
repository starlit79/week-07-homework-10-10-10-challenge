/*
@Challenge 02 - Write a function named 'priceTotal' that uses the .reduce() method to subtract numbers in an array.
@Example - Sending [100, 50, 20] through the function should return 30.
@Test - Make a function call of 'priceTotal()'
*/

function priceTotal(numArray){
  return numArray.reduce((a, b) =>{ return a - b})
}

console.log(priceTotal([100, 50, 20]))
