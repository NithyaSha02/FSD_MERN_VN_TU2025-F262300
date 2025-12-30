function placeOrder(callback) {
  setTimeout(() => {
    console.log("Order placed");
    callback(); // move to cooking
  }, 1000); // 1 second delay
}

function cookFood(callback) {
  setTimeout(() => {
    console.log("Food cooking");
    callback(); // move to delivery
  }, 2000); // 2 seconds delay
}

function deliverFood() {
  setTimeout(() => {
    console.log("Food delivered");
  }, 1500); // 1.5 seconds delay
}

// Run the sequence
placeOrder(() => {
  cookFood(() => {
    deliverFood();
  });
});