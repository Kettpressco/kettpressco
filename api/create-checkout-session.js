import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { calculateCartTotal } from "../src/utils/calculateCartTotal.js";
const supabase = createClient(
  process.env.SUPABASE_URL,

  process.env.SUPABASE_SERVICE_ROLE_KEY
);

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY
);



export default async function handler(req, res) {


  if(req.method !== "POST"){

    return res.status(405).json({
      error:"Method not allowed"
    });

  }



  try {


    const {
      cart
    } = req.body;



    const session =
      await stripe.checkout.sessions.create({
    


        payment_method_types:[
          "card"
        ],


        line_items:

          cart.map((item)=>({

            price_data:{

              currency:"gbp",

              product_data:{

                name:item.name,

                description:
                `${item.size} - ${item.colour}`

              },


              unit_amount:
              Math.round(
                item.price * 100
              )

            },


            quantity:
            item.quantity


          })),


      mode:"payment",
ui_mode: "hosted_page",


        success_url:

        "https://kettpressco.com/order-success",


        cancel_url:

        "https://kettpressco.com/cart"


      });

await supabase.from("orders").insert([
  {
    customer_name: req.body.customer?.name,
    customer_email: req.body.customer?.email,
  total: calculateCartTotal(cart),
    items: cart,
    stripe_session_id: session.id
  }
]);

return res.status(200).json({
  id: session.id,
  url: session.url
});


  }

catch(error){

  console.error("STRIPE ERROR:", error);

  res.status(500).json({
    error: error.message,
    details: error.raw?.message || "No details"
  });




  }


}