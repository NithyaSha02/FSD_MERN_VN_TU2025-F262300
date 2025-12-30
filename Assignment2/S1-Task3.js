
let names = "Saru";

// Print greeting message
let message = `Hello, ${names}! Welcome to JavaScript.`;
console.log(message);

// Convert the name to uppercase
console.log("Uppercase Name: " + names.toUpperCase());

// Check if the message has more than 10 characters
if (message.length > 10) {
    console.log("The message has more than 10 characters.");
} else {
    console.log("The message has 10 or fewer characters.");
}

// Check if the message contains the word "JavaScript"
if (message.includes("JavaScript")) {
    console.log("The message contains the word 'JavaScript'.");
} else {
    console.log("The message does NOT contain the word 'JavaScript'.");
}
