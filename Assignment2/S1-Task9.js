
let person1 = 300;
let person2 = 500;

// Use ternary operator to check who earns more
let result = (person1 > person2) 
    ? `Person 1 earns more by ₹${person1 - person2}` 
    : `Person 2 earns more by ₹${person2 - person1}`;

// Print result
console.log(result);
