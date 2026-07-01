import fs from "fs";
import csv from "csv-parser";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bqzhjlmyeoyrbzsuufcu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxemhqbG15ZW95cmJ6c3V1ZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MTYzMDcsImV4cCI6MjA5ODQ5MjMwN30.2CFFTM7FeXVAghDSxeXMA3vDxZIMnfhxcnzplO44AvY";

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);


const products = {};


fs.createReadStream("./data/pencarrie-products.csv")
.pipe(csv())
.on("data", (row)=>{

  const styleCode = row["Style Code"];

  if(!styleCode) return;


  if(!products[styleCode]){

    products[styleCode] = {

      id: styleCode,

      name: row["Title"] || "",

      supplier_code:
        row["Supplier Code"] || "",

  price:
  (() => {

    const basePrice =
      Number(row["Single List Price"] || 0);

    const category =
      row["Type"] || "";


    let finalPrice;


    if(category === "T-Shirt") {

      finalPrice = basePrice + 3.99;

    } else {

      finalPrice = basePrice + 5;

    }


    const minimumPrice = 9.99;


    if(finalPrice < minimumPrice) {

      finalPrice = minimumPrice;

    }


    return Number(
      finalPrice.toFixed(2)
    );


  })(),

      material:
        row["Material"] || "",


      weight:
        row["Weight"] || "",


      features:
        row["Features"] || "",
category:
  row["Type"] || "",

categories:
  row["Suggested Categories"] || "",

collections:
  row["Suggested Collections"] || "",



      colours: [],

      sizes: [],


      images:{
        model:"",
        front:"",
        back:"",
        side:""
      },


      variants:[]

    };

  }



  const product = products[styleCode];


  const colour =
    row["Colourway Name"] || "Default";



  if(!product.colours.includes(colour)){

    product.colours.push(colour);

  }



  if(
    row["Size"] &&
    !product.sizes.includes(row["Size"])
  ){

    product.sizes.push(row["Size"]);

  }



  const existingVariant =
    product.variants.find(
      v => v.colour === colour
    );



  if(!existingVariant){


    product.variants.push({

      colour,


      images:{

        model:
          row["Model Image"] || "",

        front:
          row["Front Image"] || "",

        back:
          row["Back Image"] || "",

        side:
          row["Side Image"] || ""

      }

    });


  }


})
.on("end", async()=>{


 const productArray =
   Object.values(products);



 console.log(
   `Uploading ${productArray.length} products...`
 );



 const chunkSize = 100;



 for(
   let i=0;
   i<productArray.length;
   i+=chunkSize
 ){

   const chunk =
     productArray.slice(
       i,
       i+chunkSize
     );



   const {error} =
     await supabase
     .from("products")
     .upsert(chunk);



   if(error){

     console.error(error);
     process.exit();

   }



   console.log(
     `Uploaded ${i+chunk.length}/${productArray.length}`
   );


 }



 console.log(
   "Import complete with colour variants!"
 );


});