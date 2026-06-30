export default function OrderSuccess(){

  return (

    <div
      style={{
        textAlign:"center",
        padding:"100px 20px"
      }}
    >

      <h1>
        Thank You For Your Order!
      </h1>

      <p>
        Your payment was successful.
        We will start preparing your custom clothing.
      </p>

      <a
        href="/shop"
        style={{
          display:"inline-block",
          marginTop:"25px",
          background:"#111",
          color:"#fff",
          padding:"14px 30px",
          borderRadius:"8px",
          textDecoration:"none"
        }}
      >

        Continue Shopping

      </a>

    </div>

  );

}