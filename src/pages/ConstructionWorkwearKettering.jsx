import { useEffect } from "react";

const serviceCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

export default function ConstructionWorkwearKettring() {
    

  useEffect(() => {
    document.title =
      "Construction Workwear Printing Kettering | Branded Hi-Vis & Uniforms| Kett Press Co";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Professional Workwear Printing in Kettering. Custom printed workwear for Construction Businesses across Northamptonshire.";
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
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/Cwork.jpg')",
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
        Construction Workwear Printing in Kettering 
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "20px",
          lineHeight: "1.7",
        }}
      >
        Premium custom Construction Workwear printing for your business
        and organisations across Northampton.
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
     Kett Press Co provides professional Construction workwear printing in Kettering for businesses, contractors, tradespeople and organisations looking for high-quality branded clothing. We supply printed workwear, uniforms, polo shirts, hoodies, sweatshirts and hi-vis clothing designed to help businesses create a professional image.
Our custom workwear printing services are ideal for construction companies, electricians, plumbers and landscapers,throughout Kettering and Northamptonshire. Every garment is printed with durable, professional-quality branding to ensure your team looks consistent and professional.
We proudly serve businesses across Kettering, Weldon, Great Oakley, Stanion, Rockingham, Kettering and the surrounding Northamptonshire area. Contact Kett Press Co today for a free quote on custom workwear printing in Kettering.
    </p>

<h2
  style={{
    textAlign: "center",
    marginTop: "60px",
    marginBottom: "30px",
    fontSize: "32px",
  }}
>
  Our Workwear Printing Services
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
    <h3>Custom Construction T-Shirts</h3>
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
    Looking for professional Workwear printing in Kettering?
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