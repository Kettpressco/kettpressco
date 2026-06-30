import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY
);

export default function Checkout() {

  const {
    cart,
    cartTotal
  } = useCart();


  const [customer, setCustomer] = useState({

    name:"",
    email:"",
    phone:"",
    address:"",
    city:"",
    postcode:""

  });



  const handleChange = (e) => {

    setCustomer({

      ...customer,

      [e.target.name]: e.target.value

    });

  };



const handleSubmit = async (e) => {

  e.preventDefault();

  const stripe = await stripePromise;

  const response = await fetch(
    "/api/create-checkout-session",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        cart,
        customer
      })
    }
  );

  const session = await response.json();

  await stripe.redirectToCheckout({
    sessionId: session.id
  });

};


  if(cart.length === 0){

    return (

      <div
        style={{
          textAlign:"center",
          padding:"80px 20px"
        }}
      >

        <h1>
          Your cart is empty
        </h1>


        <Link

          to="/shop"

          style={{
            background:"#111",
            color:"#fff",
            padding:"14px 25px",
            borderRadius:"8px",
            textDecoration:"none"
          }}

        >

          Return To Shop

        </Link>


      </div>

    );

  }



  return (

    <div

      style={{

        maxWidth:"1100px",

        margin:"0 auto",

        padding:"60px 20px",

        display:"grid",

        gridTemplateColumns:
        "repeat(auto-fit,minmax(320px,1fr))",

        gap:"40px"

      }}

    >



      <div>


        <h1>
          Checkout
        </h1>


        <form

          onSubmit={handleSubmit}

          style={{
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}

        >


          <input

            name="name"

            placeholder="Full Name"

            value={customer.name}

            onChange={handleChange}

            required

            style={inputStyle}

          />



          <input

            name="email"

            type="email"

            placeholder="Email Address"

            value={customer.email}

            onChange={handleChange}

            required

            style={inputStyle}

          />



          <input

            name="phone"

            placeholder="Phone Number"

            value={customer.phone}

            onChange={handleChange}

            required

            style={inputStyle}

          />



          <input

            name="address"

            placeholder="Delivery Address"

            value={customer.address}

            onChange={handleChange}

            required

            style={inputStyle}

          />



          <input

            name="city"

            placeholder="Town / City"

            value={customer.city}

            onChange={handleChange}

            required

            style={inputStyle}

          />



          <input

            name="postcode"

            placeholder="Postcode"

            value={customer.postcode}

            onChange={handleChange}

            required

            style={inputStyle}

          />




<button
  type="submit"
  style={buttonStyle}
>
  Pay Securely
</button>



        </form>


      </div>





      <div>


        <h2>
          Order Summary
        </h2>



        {cart.map((item)=>(


          <div

            key={`${item.id}-${item.size}-${item.colour}`}

            style={{

              borderBottom:"1px solid #ddd",

              padding:"15px 0"

            }}

          >

            <strong>
              {item.name}
            </strong>


            <p>
              {item.size} / {item.colour}
            </p>


            <p>
              Qty: {item.quantity}
            </p>


            <p>

              £{(
                item.price *
                item.quantity
              ).toFixed(2)}

            </p>


          </div>


        ))}



        <h2>

          Total:
          {" "}
          £{cartTotal.toFixed(2)}

        </h2>


        <p>
          Delivery charges will be calculated before payment.
        </p>


      </div>


    </div>

  );

}



const inputStyle = {

  padding:"14px",

  borderRadius:"8px",

  border:"1px solid #ccc",

  fontSize:"16px"

};



const buttonStyle = {

  background:"#111",

  color:"#fff",

  padding:"16px",

  border:"none",

  borderRadius:"10px",

  fontSize:"18px",

  cursor:"pointer"

};