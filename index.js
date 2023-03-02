const fs = require("fs");
const csv = require("@fast-csv/parse");
const testFolder = "./data/images/";
const configJson = require("./config.json");

async function main() {
  let allReferences = [];

  fs.createReadStream("./data/data.csv")
    .pipe(csv.parse({ delimiter: configJson.delimiter }))
    .on("error", (error) => console.error(error))
    .on("data", (row) => {
      allReferences.push(row[1]);
    })
    .on("end", (rowCount) => {
      fs.readdir(testFolder, (err, files) => {
        const filteredFiles = files.filter((file) =>
          allReferences.includes(file.replace(".jpg", "").replace(".png", ""))
        );

        if (filteredFiles.length > 0) {
          fs.mkdir("./data/images-filtered", { recursive: true }, (err) => {
            if (err) throw err;
          });

          filteredFiles.forEach((file) => {
            fs.copyFile(
              `./data/images/${file}`,
              `./data/images-filtered/${file}`,
              (err) => {
                if (err) throw err;
              }
            );
          });
        }
      });
    });
}

main();
