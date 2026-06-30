import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


export default function ProductCard({ product }) {

  const { addToCart } = useCart();

  const [size, setSize] = useState(product.sizes[0]);
  const [colour, setColour] = useState(product.colours[0]);


  const handleAddToCart = () => {

    addToCart({

      ...product,

      size,

      colour,

      quantity: 1

    });

  };


  return (

    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}
    >

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "260px",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />


    <Link
to={`/product/${product.slug}`}
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
          color: "#666",
          minHeight: "50px"
        }}
      >
        {product.description}
      </p>


      <strong
        style={{
          fontSize: "20px"
        }}
      >
        £{product.price.toFixed(2)}
      </strong>



      <label>
        Size
      </label>

      <select
        value={size}
        onChange={(e)=>setSize(e.target.value)}
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



      <label>
        Colour
      </label>


      <select
        value={colour}
        onChange={(e)=>setColour(e.target.value)}
        style={{
          padding:"10px",
          borderRadius:"8px"
        }}
      >

        {product.colours.map((item)=>(

          <option
            key={item}
            value={item}
          >
            {item}
          </option>

        ))}

      </select>



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