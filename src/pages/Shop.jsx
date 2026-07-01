import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Shop() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");


  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "80px",
          fontSize: "20px"
        }}
      >
        Loading products...
      </div>
    );
  }


  const categories = [
    "All",
    "T-Shirts",
    "Hoodies",
    "Sweatshirts",
    "Polos",
    "Workwear",
    "Hi-Vis"
  ];


  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category &&
            product.category === category
        );


  return (

    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px"
      }}
    >


      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "20px"
        }}
      >
        Custom Clothing Shop
      </h1>


      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          maxWidth: "700px",
          margin: "0 auto 40px"
        }}
      >
        Shop personalised t-shirts, hoodies,
        workwear and branded clothing from
        Kett Press Co.
      </p>



      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "50px"
        }}
      >

        {categories.map((item) => (

          <button
            key={item}

            onClick={() =>
              setCategory(item)
            }

            style={{
              padding: "12px 22px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",

              background:
                category === item
                  ? "#111"
                  : "#eee",

              color:
                category === item
                  ? "#fff"
                  : "#111"
            }}
          >

            {item}

          </button>

        ))}

      </div>




      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "30px"
        }}
      >


        {filteredProducts.map((product) => (

          <ProductCard

            key={product.id}

            product={product}

          />

        ))}


      </div>


    </div>

  );

}