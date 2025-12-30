
function checkBusRoute(busNumber) {
    let route = (busNumber % 2 === 0) ? "Route A" : "Route B";
    console.log("Bus Number " + busNumber + " goes to " + route);
}

// Example calls
checkBusRoute(24);  // Even → Route A
checkBusRoute(17);  // Odd → Route B
checkBusRoute(120); // Even → Route A
