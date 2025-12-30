
let numbers = [12, 45, 7, 23, 89];

console.log("Numbers:", numbers);

// Calculate the sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);

// Find the largest number
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest Number:", largest);
