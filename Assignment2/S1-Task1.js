

let num = 15; 

// Check even or odd
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// Check positive, negative, or zero
if (num > 0) {
    console.log(num + " is Positive");
} else if (num < 0) {
    console.log(num + " is Negative");
} else {
    console.log(num + " is Zero");
}

// Check divisibility by both 3 and 5
if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " is divisible by both 3 and 5");
} else {
    console.log(num + " is NOT divisible by both 3 and 5");
}