import React, { useEffect } from "react";

export default function ThankYou() {

 useEffect(() => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "ads_conversion_Request_quote_1");
    console.log("Request Quote conversion event sent.");
  } else {
    console.warn("Google tag not loaded.");
  }
}, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "#f8f8f8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          background: "white",
          padding: "50px 30px",
          borderRadius: "18px",
          textAlign: "center",
          boxShadow: "0 5px 25px rgba(0,0,0,0.1)",
        }}
      >

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            color: "#111",
          }}
        >
          Thank You For Your Quote Request!
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Your request has been received by Kett Press Co.
          We will review your details and get back to you as soon as possible
          with your personalised quote.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#333",
            marginBottom: "35px",
          }}
        >
          We print custom T-shirts, hoodies, workwear and branded clothing
          for businesses, events and organisations across the UK.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            background: "#D62828",
            color: "white",
            padding: "16px 35px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Return To Homepage
        </a>

      </div>
    </div>
  );
}