import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Cart() {

  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart();



  if (cart.length === 0) {

    return (

      <div
        style={{
          maxWidth:"900px",
          margin:"0 auto",
          padding:"80px 20px",
          textAlign:"center"
        }}
      >

        <h1>
          Your Cart Is Empty
        </h1>


        <p>
          You haven't added any products yet.
        </p>


        <Link

          to="/shop"

          style={{
            display:"inline-block",
            marginTop:"20px",
            background:"#111",
            color:"#fff",
            padding:"14px 30px",
            borderRadius:"8px",
            textDecoration:"none"
          }}

        >

          Continue Shopping

        </Link>


      </div>

    );

  }




  return (

    <div

      style={{
        maxWidth:"1100px",
        margin:"0 auto",
        padding:"60px 20px"
      }}

    >


      <h1>
        Your Shopping Cart
      </h1>



      <Link

        to="/shop"

        style={{
          display:"inline-block",
          margin:"20px 0 40px",
          textDecoration:"none",
          color:"#111",
          fontWeight:"600"
        }}

      >

        ← Continue Shopping

      </Link>




      {cart.map((item)=>(


        <div

          key={`${item.id}-${item.size}-${item.colour}`}

          style={{

            display:"flex",

            gap:"20px",

            alignItems:"center",

            background:"#fff",

            padding:"20px",

            marginBottom:"20px",

            borderRadius:"15px",

            boxShadow:"0 5px 20px rgba(0,0,0,0.08)"

          }}

        >


          <img

            src={item.image}

            alt={item.name}

            style={{
              width:"120px",
              height:"120px",
              objectFit:"cover",
              borderRadius:"10px"
            }}

          />



          <div
            style={{
              flex:1
            }}
          >

            <h2>
              {item.name}
            </h2>


            <p>
              Size: {item.size}
            </p>


            <p>
              Colour: {item.colour}
            </p>


            <strong>
              £{item.price.toFixed(2)}
            </strong>


          </div>



          <select

            value={item.quantity}

            onChange={(e)=>

              updateQuantity(

                item.id,

                item.size,

                item.colour,

                Number(e.target.value)

              )

            }

            style={{
              padding:"10px"
            }}

          >

            {[1,2,3,4,5,6,7,8,9,10].map(num=>(

              <option
                key={num}
                value={num}
              >

                {num}

              </option>

            ))}

          </select>




          <button

            onClick={()=>

              removeFromCart(

                item.id,

                item.size,

                item.colour

              )

            }

            style={{

              background:"#c62828",

              color:"#fff",

              border:"none",

              padding:"10px 15px",

              borderRadius:"8px",

              cursor:"pointer"

            }}

          >

            Remove

          </button>



        </div>


      ))}




      <div

        style={{

          background:"#f5f5f5",

          padding:"30px",

          borderRadius:"15px",

          textAlign:"right"

        }}

      >


        <h2>

          Subtotal:
          {" "}
          £{cartTotal.toFixed(2)}

        </h2>



        <p>
          Delivery calculated at checkout.
        </p>



        <Link

          to="/checkout"

          style={{

            display:"inline-block",

            background:"#111",

            color:"#fff",

            padding:"16px 35px",

            borderRadius:"10px",

            textDecoration:"none",

            marginTop:"15px"

          }}

        >

          Proceed To Checkout

        </Link>


      </div>


    </div>

  );

}