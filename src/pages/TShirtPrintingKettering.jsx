import { useEffect } from "react";

const serviceCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

export default function TshirtPrintingKettering() {

  useEffect(() => {
    document.title =
      "T-Shirt Printing Kettering | Custom Printed T-Shirts | Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Based in Kettering, Northamptonshire, providing custom clothing printing for businesses, schools, events and organisations.";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
<div style={{ maxWidth: "1100px", margin: "auto", padding: "40px 20px" }}>

    {/* HERO */}

    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/tshirt.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: "120px 20px",
        borderRadius: "20px",
        marginBottom: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(40px,5vw,60px)",
          marginBottom: "20px",
        }}
      >
        T-Shirt Printing in Kettering
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "20px",
          lineHeight: "1.7",
        }}
      >
        Premium custom T-shirt printing for businesses,
        events, gyms, schools and organisations across
        Northamptonshire.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <a href="/#quote">
          <button
            style={{
              background: "#f97316",
              color: "white",
              border: "none",
              padding: "14px 30px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Get a Quote
          </button>
        </a>

        <a
          href="https://wa.me/447770118148"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{
              background: "#25D366",
              color: "white",
              border: "none",
              padding: "14px 30px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            WhatsApp Us
          </button>
        </a>
      </div>
    </div>

    {/* PAGE CONTENT */}

    <p>
      Kett Press Co provides professional T-shirt printing in Kettering
      for businesses, gyms, events, schools and organisations.
      We offer high-quality garment printing with fast turnaround
      times across Northamptonshire.
    </p>

<h2
  style={{
    textAlign: "center",
    marginTop: "60px",
    marginBottom: "30px",
    fontSize: "32px",
  }}
>
  Our T-Shirt Printing Services
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginBottom: "60px",
  }}
>
  <div style={serviceCard}>
    <h3>Custom Business T-Shirts</h3>
    <p>
      Professional branded clothing for businesses, teams
      and organisations.
    </p>
  </div>

  <div style={serviceCard}>
    <h3>Event Merchandise</h3>
    <p>
      High-quality printed apparel for events, promotions
      and special occasions.
    </p>
  </div>

  <div style={serviceCard}>
    <h3>Gym & Fitness Apparel</h3>
    <p>
      Custom printed gym wear and fitness clothing for
      trainers and fitness brands.
    </p>
  </div>

  <div style={serviceCard}>
    <h3>Branded Staff Uniforms</h3>
    <p>
      Durable, professional uniforms designed to represent
      your business.
    </p>
  </div>

  <div style={serviceCard}>
    <h3>Promotional Clothing</h3>
    <p>
      Affordable bulk printing for marketing campaigns,
      giveaways and brand awareness.
    </p>
  </div>
</div>

<h2
  style={{
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
  }}
>
  Why Choose Kett Press Co?
</h2>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "50px",
    fontWeight: "600",
  }}
>
  <span>✓ Premium DTF Printing</span>
  <span>✓ Fast Turnaround</span>
  <span>✓ Bulk Order Discounts</span>
  <span>✓ Northamptonshire Based</span>
  <span>✓ Quality Checked</span>
</div>

<div
  style={{
    background: "#111",
    color: "white",
    padding: "50px 30px",
    borderRadius: "20px",
    textAlign: "center",
  }}
>
  <h2>Request a Free Quote Today</h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "20px auto",
      lineHeight: "1.8",
    }}
  >
    Kett Press Co | T-Shirt Printing Kettering | Workwear Printing Northamptonshire
    Contact Kett Press Co today for a fast, no-obligation quote.
  </p>
  <a href="tel:07770118148">
    <button
      style={{
        background: "#f97316",
        color: "white",
        border: "none",
        padding: "14px 30px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Call 07770 118148
    </button>
  </a>
</div>

</div>

  );
}