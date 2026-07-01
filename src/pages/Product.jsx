import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { Helmet } from "react-helmet-async";
import ArtworkUpload from "../components/ArtworkUpload";

export default function Product() {

    const { slug } = useParams();

 const product = products.find(
(item) => item.slug === slug
);


  const { addToCart } = useCart();


  const [size, setSize] = useState(
    product?.sizes[0] || ""
  );


  const [colour, setColour] = useState(
    product?.colours[0] || ""
  );

  const [artwork, setArtwork] = useState("");

  if (!product) {

    return (

      <div
        style={{
          padding:"80px",
          textAlign:"center"
        }}
      >

        <h1>
          Product Not Found
        </h1>

      </div>

    );

  }



const handleAddToCart = () => {

  addToCart({

    ...product,

    size,

    colour,

    artwork,

    quantity:1

  });

};

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

"@context":"https://schema.org",

"@type":"Product",

"name":product.name,

"image":product.image,

"description":product.description,

"brand":{

"@type":"Brand",

"name":product.brand

},

"offers":{

"@type":"Offer",

"priceCurrency":"GBP",

"price":product.price,

"availability":
"https://schema.org/InStock"

}

})}

</script>


</Helmet>

  return (

    <div

      style={{

        maxWidth:"1200px",

        margin:"0 auto",

        padding:"60px 20px",

        display:"grid",

        gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",

        gap:"50px"

      }}

    >


      <img

        src={product.image}

        alt={product.name}

        style={{

          width:"100%",

          borderRadius:"20px"

        }}

      />



      <div>


        <h1>

          {product.name}

        </h1>


        <p>

          {product.description}

        </p>



        <h2>

          £{product.price.toFixed(2)}

        </h2>



        <label>
          Size
        </label>


        <select

          value={size}

          onChange={(e)=>setSize(e.target.value)}

          style={{

            display:"block",

            width:"100%",

            padding:"12px",

            margin:"10px 0 20px"

          }}

        >

          {product.sizes.map((item)=>(

            <option key={item}>

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

            display:"block",

            width:"100%",

            padding:"12px",

            margin:"10px 0 30px"

          }}

        >


          {product.colours.map((item)=>(

            <option key={item}>

              {item}

            </option>

          ))}


        </select>


<ArtworkUpload 
  onUpload={setArtwork}
/>
        <button

          onClick={handleAdd}

          style={{

            background:"#111",

            color:"#fff",

            border:"none",

            padding:"16px 35px",

            borderRadius:"10px",

            cursor:"pointer",

            fontSize:"18px"

          }}

        >

          Add To Cart

        </button>


      </div>


    </div>

  );

}