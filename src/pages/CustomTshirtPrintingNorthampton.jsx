import React from "react";
import { Helmet } from "react-helmet-async";

export default function CustomTshirtPrintingNorthampton() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Custom T-Shirt Printing Northampton | Workwear & Branded Clothing | Kett Press Co
        </title>

        <meta
          name="description"
          content="Custom T-shirt printing in Northampton. Kett Press Co provides high-quality branded workwear, uniforms, hoodies and promotional clothing across Northamptonshire."
        />

        <link
          rel="canonical"
          href="https://kettpressco.com/custom-t-shirt-printing-northampton"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          lineHeight: "1.7",
        }}
      >
        {/* HERO */}
        <section>
          <h1 style={{ fontSize: "clamp(32px,5vw,56px)" }}>
            Custom T-Shirt Printing Northampton
          </h1>

          <p style={{ fontSize: "18px", color: "#444", maxWidth: "900px" }}>
            High-quality custom T-shirt printing, branded workwear and uniforms
            for businesses, schools, gyms, charities and events across Northampton
            and Northamptonshire.
          </p>
        </section>

        {/* LOCAL GEO */}
        <section style={{ marginTop: "70px" }}>
          <h2>Local Printing Services in Northampton</h2>
          <p>
            We serve Northampton including Brackmills, Sixfields, Moulton Park,
            Kingsthorpe, Abington, Duston and surrounding areas.
          </p>
        </section>

        {/* SERVICES */}
        <section style={{ marginTop: "70px" }}>
          <h2>Our Services</h2>
          <ul>
            <li>Custom T-Shirt Printing</li>
            <li>Branded Workwear</li>
            <li>Hoodie Printing</li>
            <li>Logo Printing</li>
            <li>Event Clothing</li>
          </ul>
        </section>

        {/* INDUSTRIES */}
        <section style={{ marginTop: "70px" }}>
          <h2>Industries We Work With</h2>
          <ul>
            <li>Construction & Trades</li>
            <li>Hospitality & Restaurants</li>
            <li>Gyms & Fitness Brands</li>
            <li>Schools & Colleges</li>
            <li>Corporate Businesses</li>
            <li>Events & Community Groups</li>
          </ul>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "90px",
            textAlign: "center",
            background: "#f5f5f5",
            padding: "50px",
            borderRadius: "16px",
          }}
        >
          <h2>Need Custom Printing in Northampton?</h2>
          <p>Get a fast quote today for custom clothing and workwear.</p>

          <a
            href="/#quote"
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "14px 28px",
              background: "#D62828",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            Request a Quote
          </a>
        </section>
      </main>
    </>
  );
}