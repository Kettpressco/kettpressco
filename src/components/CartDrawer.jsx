import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function CartDrawer() {

  const {
    cart,
    cartTotal,
    removeFromCart
  } = useCart();


  return (

    <div
      style={{
        position:"fixed",
        right:0,
        top:0,
        width:"380px",
        height:"100vh",
        background:"#fff",
        boxShadow:"-5px 0 20px rgba(0,0,0,0.15)",
        padding:"30px",
        zIndex:2000,
        overflowY:"auto"
      }}
    >

      <h2>
        Shopping Cart
      </h2>


      {cart.length === 0 ? (

        <>

          <p>
            Your cart is empty.
          </p>


          <Link
            to="/shop"
            style={{
              display:"inline-block",
              background:"#111",
              color:"#fff",
              padding:"12px 20px",
              borderRadius:"8px",
              textDecoration:"none"
            }}
          >

            Continue Shopping

          </Link>

        </>


      ) : (

        <>


        {cart.map((item)=>(

          <div
            key={`${item.id}-${item.size}-${item.colour}`}
            style={{
              borderBottom:"1px solid #ddd",
              paddingBottom:"15px",
              marginBottom:"15px"
            }}
          >

            <h3>
              {item.name}
            </h3>


            <p>
              {item.size} / {item.colour}
            </p>


            <p>
              Qty: {item.quantity}
            </p>


            <strong>
              £{(item.price * item.quantity).toFixed(2)}
            </strong>


            <br />


            <button

              onClick={() =>
                removeFromCart(
                  item.id,
                  item.size,
                  item.colour
                )
              }

              style={{
                marginTop:"10px",
                background:"#c62828",
                color:"#fff",
                border:"none",
                padding:"8px 12px",
                borderRadius:"6px",
                cursor:"pointer"
              }}

            >

              Remove

            </button>


          </div>

        ))}



        <h2>
          Total £{cartTotal.toFixed(2)}
        </h2>



        <Link

          to="/cart"

          style={{
            display:"block",
            textAlign:"center",
            background:"#111",
            color:"#fff",
            padding:"15px",
            borderRadius:"10px",
            textDecoration:"none",
            marginTop:"20px"
          }}

        >

          View Cart

        </Link>


        </>

      )}


    </div>

  );

}