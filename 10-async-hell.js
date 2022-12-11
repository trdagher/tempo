const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      return;
    }
    const second = result;
    writeFile(
      "./content/subfolder/result.txt",
      `"here is the result" ${first} ${second}`,
      (err, result) => {
        console.log(result);
      }
    );
  });
});
