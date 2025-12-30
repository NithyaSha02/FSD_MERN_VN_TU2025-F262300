function downloadFile(filename, callback) {
  setTimeout(() => {
    console.log(`Downloading ${filename}...`);
    callback(); // call the callback after download finishes
  }, 2000); // 2 second delay
}

// Example usage:
downloadFile("myDocument.pdf", () => {
  console.log("Download complete!");
});