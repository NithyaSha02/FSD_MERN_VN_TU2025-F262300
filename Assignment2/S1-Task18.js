function startExam(callback) {
  setTimeout(() => {
    console.log("Exam started");
    callback(); // move to evaluation
  }, 1000); // 1 second delay
}

function evaluateExam(callback) {
  setTimeout(() => {
    console.log("Evaluating answers");
    callback(); // move to result declaration
  }, 2000); // 2 seconds delay
}

function declareResult() {
  setTimeout(() => {
    console.log("Result declared");
  }, 1500); // 1.5 seconds delay
}

// Run the sequence
startExam(() => {
  evaluateExam(() => {
    declareResult();
  });
});