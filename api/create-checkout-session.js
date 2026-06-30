import Stripe from "stripe";


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
        payment_method_collection: "always",


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

ui_mode:"hosted",


        success_url:

        "https://kettpressco.com/order-success",


        cancel_url:

        "https://kettpressco.com/cart"


      });

console.log("Stripe session:", session);
res.status(200).json({
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