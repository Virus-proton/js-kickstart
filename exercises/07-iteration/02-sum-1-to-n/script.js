// Sum 1 to N Exercise
// Goal: Ask for a number N, then calculate the sum of numbers from 1 to N

const prompt = require('prompt-sync')();

const N = Number(prompt("Enter number: "));
let sum = 0

for (i = 0; i <= N; i++){
    sum += i
}
// TODO: Ask the user for a number N
// TODO: Convert the input to a number using Number()
// TODO: Create a variable to store the sum (start with 0)
// TODO: Use a for loop to go from 1 to N
// TODO: Inside the loop, add the current number to the sum
// TODO: Display the final result

console.log("The sum of numbers from 1 to " + N + " is: " + sum);