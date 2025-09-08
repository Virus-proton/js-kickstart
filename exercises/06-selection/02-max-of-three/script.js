// Maximum of Three Exercise
// Goal: Ask for three numbers and find the largest one

const prompt = require('prompt-sync')();

const N1 = Number(prompt("Enter first number: "));
const N2 = Number(prompt("Enter first number: "));
const N3 = Number(prompt("Enter first number: "));
// TODO: Ask the user for three numbers
// TODO: Convert each input to a number using Number()
// TODO: Use selection statements to determine which number is largest
// TODO: Display the maximum number
if (N1 > N2 && N1> N3)
    console.log(N1 + " Is the largest number");
else if (N2 > N1 && N2> N3)
    console.log(N2 + " Is the largest number");
else if (N3 > N2 && N3> N1)
    console.log(N3 + " Is the largest number");
else if (N1 == N2 && N2 == N3)
    console.log("All numbers are equal");
else
    console.log("Two numbers are equal")
