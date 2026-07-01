import fs from "fs";
import csv from "csv-parser";

const products = {};

fs.createReadStream("./data/pencarrie-products.csv")
  .pipe(csv())
  .on("data", (row) => {

    const styleCode = row["Style Code"];

    if (!styleCode) return;

    if (!products[styleCode]) {
      products[styleCode] = {
        id: styleCode,
        name: row["Title"],
        supplierCode: row["Supplier Code"] || "",
        price: Number(row["Single List Price"] || 0),

        colours: [],
        sizes: [],

        material: row["Material"] || "",
        weight: row["Weight"] || "",

        images: {
          model: row["Model Image"] || "",
          front: row["Front Image"] || "",
          back: row["Back Image"] || "",
          side: row["Side Image"] || ""
        },

        features: row["Features"] || ""
      };
    }

    if (
      row["Colourway Name"] &&
      !products[styleCode].colours.includes(row["Colourway Name"])
    ) {
      products[styleCode].colours.push(row["Colourway Name"]);
    }

    if (
      row["Size"] &&
      !products[styleCode].sizes.includes(row["Size"])
    ) {
      products[styleCode].sizes.push(row["Size"]);
    }

  })
  .on("end", () => {

    const output = 
`export default ${JSON.stringify(
  Object.values(products),
  null,
  2
)};`;

    fs.writeFileSync(
      "./src/data/products.js",
      output
    );

    console.log("Products converted successfully!");

  });