// Max in Array Exercise
// Goal: Create a function that finds and returns the largest number in an array

// TODO: Define a function called 'findMax' that:
// - Takes one parameter: numbers (an array)
// - Finds the largest number in the array using a loop
// - Returns the maximum value (don't print it)

// Hint: Start with let max = numbers[0]; then compare each element

// TODO: Test your function by calling it with different arrays
// Example: console.log(findMax([3, 7, 2, 9, 1])); // Should output: 9
function findMax(numbers){
    let CurMax = 0;

    for( i = 0; i < numbers.length; i++)
        if (numbers[i] > CurMax)
            CurMax = numbers[i];

    return CurMax;
}

console.log(findMax([1, 5, 7, 56, 35, 87]));

//bakachina från MACSI