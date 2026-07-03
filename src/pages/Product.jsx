import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useCart } from "../context/CartContext";
import { calculatePrice } from "../utils/calculatePrice";
import ArtworkUpload from "../components/ArtworkUpload";

import products from "../data/products"; // ⚠️ make sure this exists

export default function Product() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);




  
  const { addToCart } = useCart();

  // ✅ safe initial states (only after product exists check in UI)
  const [size, setSize] = useState(product?.sizes?.[0] || "");
  const [colour, setColour] = useState(product?.colours?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [artwork, setArtwork] = useState(null);

  const [options, setOptions] = useState({
    
    backPrint: false,
    sleevePrint: false,
    oversizedPrint: false,
    artworkEdit: false,
    newArtwork: false,
  });

  const quantityValue = Number(quantity) || 1;


  

  // ❌ safe guard FIRST (no hooks after this point)
  if (!product) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h1>Product Not Found</h1>
      </div>
    );
  }

  // ✅ price ALWAYS derived (never stored)
calculatePrice(product, options)

  // ✅ correct function name

 const finalPrice = calculatePrice(product, options);

const handleAdd = () => {
  const item = {
    id: product.id,
    name: product.name || product.title,
    price: finalPrice,
    basePrice: Number(product.price || product.base_price || 0),
    quantity,
    size,
    colour,
    image: mainImage,
    artworkUrl,
    options: {
      backPrint,
      sleevePrint,
      oversizedPrint,
      artworkEdit,
      newArtwork,
    },
  };

  console.log("ADDING TO CART:", item);

  addToCart(item);
  onCartClick?.();
};
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "50px",
      }}
    >
      {/* SEO */}
      <Helmet>
        <title>
          {product.name} | Custom Printing | Kett Press Co
        </title>

        <meta
          name="description"
          content={`${product.description} Personalised clothing printing available from Kett Press Co.`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: product.image,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: product.brand,
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
               price,
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          borderRadius: "20px",
        }}
      />

      {/* DETAILS */}
      <div>
        <h1>{product.name}</h1>

        <p>{product.description}</p>

        {/* LIVE PRICE */}
        <h2>£{price.toFixed(2)}</h2>

        {/* SIZE */}
        <label>Size</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={selectStyle}
        >
          {product.sizes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* COLOUR */}
        <label>Colour</label>
        <select
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          style={selectStyle}
        >
          {product.colours.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* QUANTITY */}
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={selectStyle}
        />

        {/* OPTIONS */}
        <div style={{ marginTop: "20px" }}>
          <h3>Print Options</h3>

          {[
            ["backPrint", "Back Print (+£5)"],
            ["sleevePrint", "Sleeve Print (+£3)"],
            ["oversizedPrint", "Oversized Print (+£5)"],
            ["artworkEdit", "Artwork Edit (+£5)"],
            ["newArtwork", "New Artwork Design (+£20)"],
          ].map(([key, label]) => (
            <label key={key} style={{ display: "block", margin: "8px 0" }}>
           <input
  type="checkbox"
  checked={options[key]}
  onChange={() =>
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

/>{" "}
              {label}
            </label>
          ))}
        </div>

     <ArtworkUpload
  onUpload={(url) => {
    if (!url) {
      console.log("Upload failed or no URL returned");
      return;
    }

    setArtwork(url);
  }}
/>
<button
  onClick={handleAddToCart}
  style={{
    background:"#111",
    color:"#fff",
    border:"none",
    padding:"16px 35px",
    borderRadius:"10px",
    cursor:"pointer",
    fontSize:"18px",
  }}
>
  Add To Cart
</button>
      </div>
    </div>
  );
}

// styles
const selectStyle = {
  display: "block",
  width: "100%",
  padding: "12px",
  margin: "10px 0 20px",
};

const buttonStyle = {
  background: "#111",
  color: "#fff",
  border: "none",
  padding: "16px 35px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "18px",
};