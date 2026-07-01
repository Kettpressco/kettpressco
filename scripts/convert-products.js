import fs from "fs";
import csv from "csv-parser";

const products = {};

fs.createReadStream("./data/pencarrie-products.csv")
  .pipe(csv())
  .on("data", (row) => {

    const styleCode = row["Style Code"];

    if (!styleCode) return;

    const colour = row["Colourway Name"] || "Default";

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

        variants: [],

        features: row["Features"] || ""
      };

    }


    // Add colour
    if (
      colour &&
      !products[styleCode].colours.includes(colour)
    ) {
      products[styleCode].colours.push(colour);
    }


    // Add size
    if (
      row["Size"] &&
      !products[styleCode].sizes.includes(row["Size"])
    ) {
      products[styleCode].sizes.push(row["Size"]);
    }



    // Add colour image variant

    let existingVariant =
      products[styleCode].variants.find(
        (v) => v.colour === colour
      );


    if (!existingVariant) {

      existingVariant = {

        colour,

        images: {

          model: row["Model Image"] || "",

          front: row["Front Image"] || "",

          back: row["Back Image"] || "",

          side: row["Side Image"] || ""

        }

      };


      products[styleCode].variants.push(
        existingVariant
      );

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


    console.log(
      "Products converted with colour variants!"
    );


  });