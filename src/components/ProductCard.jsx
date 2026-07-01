import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const firstVariant = product.variants?.[0];

  const [size, setSize] = useState(product.sizes?.[0] || "");

  const [colour, setColour] = useState(
    firstVariant?.colour ||
      product.colours?.[0] ||
      ""
  );





const selectedVariant =
  product.variants?.find(
    (variant) =>
      variant.colour === colour
  );


const image =
  selectedVariant?.images?.front ||
  selectedVariant?.images?.model ||
  product.images?.front ||
  product.images?.model ||
  "/images/placeholder.jpg";


  const slug =
    product.slug ||
    product.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");



  const handleAddToCart = () => {

    addToCart({

      ...product,

      size,

      colour,

      image,

      quantity: 1,

    });

  };



  const colourCode = (name) => {

    const colours = {

      black:"#000",

      white:"#fff",

      navy:"#001f3f",

      blue:"#0074D9",

      red:"#ff4136",

      green:"#2ecc40",

      grey:"#999",

      gray:"#999",

      yellow:"#ffdc00",

      orange:"#ff851b",

      pink:"#ff69b4",

      purple:"#b10dc9",

      brown:"#85144b",

    };


    return (
      colours[
        name
          ?.toLowerCase()
          .trim()
      ] || "#ddd"
    );

  };



  return (

    <div
      style={{
        background:"#fff",
        borderRadius:"16px",
        padding:"20px",
        boxShadow:"0 5px 20px rgba(0,0,0,0.08)",
        display:"flex",
        flexDirection:"column",
        gap:"15px"
      }}
    >


     <img
 src={image}
 key={image}
 alt={product.name}
 loading="lazy"
 style={{
   width:"100%",
   height:"260px",
   objectFit:"contain",
   borderRadius:"12px",
   background:"#f8f8f8"
 }}
/>


      <Link
        to={`/product/${slug}`}
        style={{
          textDecoration:"none",
          color:"#111"
        }}
      >

        <h3>
          {product.name}
        </h3>

      </Link>



      <p
        style={{
          color:"#666",
          minHeight:"50px"
        }}
      >
        {product.material || product.features || ""}
      </p>



      <strong
        style={{
          fontSize:"20px"
        }}
      >
        £{Number(product.price).toFixed(2)}
      </strong>




      {product.sizes?.length > 0 && (

        <>

        <label>
          Size
        </label>


        <select

          value={size}

          onChange={(e)=>
            setSize(e.target.value)
          }

          style={{
            padding:"10px",
            borderRadius:"8px"
          }}

        >

          {product.sizes.map((item)=>(

            <option
              key={item}
              value={item}
            >
              {item}
            </option>

          ))}


        </select>

        </>

      )}





      {product.colours?.length > 0 && (
  <>
    <label>Colour</label>

    <div
      style={{
        display:"flex",
        gap:"10px",
        flexWrap:"wrap"
      }}
    >

      {product.colours.map((item)=>(

        <button
          key={item}
          onClick={() => setColour(item)}
          title={item}
          style={{
            width:"32px",
            height:"32px",
            borderRadius:"50%",
            border:
              colour === item
                ? "3px solid #111"
                : "1px solid #ccc",
            background:item.toLowerCase(),
            cursor:"pointer"
          }}
        />

      ))}

    </div>
  </>
)}




      <button

        onClick={handleAddToCart}

        style={{
          background:"#111",
          color:"#fff",
          border:"none",
          padding:"14px",
          borderRadius:"10px",
          cursor:"pointer",
          fontSize:"16px",
          fontWeight:"600"
        }}

      >

        Add To Cart

      </button>


    </div>

  );

}