

function rechargeOption(choice) {
    switch (choice) {
        case 1:
            console.log("Data Pack");
            break;
        case 2:
            console.log("Talktime");
            break;
        case 3:
            console.log("Validity Recharge");
            break;
        default:
            console.log("Invalid Choice");
    }
}

// Example calls
rechargeOption(1);  // Output: Data Pack
rechargeOption(2);  // Output: Talktime
rechargeOption(3);  // Output: Validity Recharge
rechargeOption(5);  // Output: Invalid Choice