let file = null;

try {
  file = openFile("data.txt");
  processFile(file);
} catch (error) {
  console.log("Error processing file:", error.message);
} finally {
  // Always executes - cleanup code
  if (file) {
    closeFile(file);
  }
}