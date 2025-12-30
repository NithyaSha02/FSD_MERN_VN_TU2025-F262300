

let totalSeats = 120;
let bookedSeats = 78;

// Calculate available seats
let availableSeats = totalSeats - bookedSeats;

// Determine status message
let statuses;
if (availableSeats < 20) {
    statuses = "Almost Full";
} else if (availableSeats >= 20 && availableSeats <= 60) {
    statuses = "Moderate Availability";
} else {
    statuses = "Plenty of Seats Available";
}

// Print results
console.log("Available Seats: " + availableSeats);
console.log("Status: " + statuses);
