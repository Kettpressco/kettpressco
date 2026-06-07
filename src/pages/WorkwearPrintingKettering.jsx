const serviceCard = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
};

export default function WorkwearPrintingKettering() {
  return (
    <div>

      <section style={{ marginBottom: "80px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "34px",
            marginBottom: "40px",
          }}
        >
          Workwear We Print
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <div style={serviceCard}>✓ Polo Shirts</div>
          <div style={serviceCard}>✓ T-Shirts</div>
          <div style={serviceCard}>✓ Hoodies</div>
          <div style={serviceCard}>✓ Sweatshirts</div>
          <div style={serviceCard}>✓ Hi-Visibility Clothing</div>
          <div style={serviceCard}>✓ Jackets</div>
          <div style={serviceCard}>✓ Uniforms</div>
          <div style={serviceCard}>✓ Staff Clothing</div>
        </div>
      </section>
<section style={{ marginBottom: "80px" }}>
  <h2
    style={{
      textAlign: "center",
      fontSize: "34px",
      marginBottom: "40px",
    }}
  >
    Why Choose Kett Press Co?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "20px",
    }}
  >
    <div style={serviceCard}>
      <h3>Premium DTF Printing</h3>
      <p>Vibrant colours and long-lasting durability.</p>
    </div>

    <div style={serviceCard}>
      <h3>Fast Turnaround</h3>
      <p>Reliable production times for your business.</p>
    </div>

    <div style={serviceCard}>
      <h3>Bulk Order Discounts</h3>
      <p>Competitive pricing on larger orders.</p>
    </div>

    <div style={serviceCard}>
      <h3>Quality Checked</h3>
      <p>Every garment is checked before delivery.</p>
    </div>

    <div style={serviceCard}>
      <h3>Northamptonshire Based</h3>
      <p>Local service with professional standards.</p>
    </div>

    <div style={serviceCard}>
      <h3>Personal Service</h3>
      <p>Friendly support from quote to delivery.</p>
    </div>
  </div>
</section>

<section style={{ marginBottom: "80px" }}>
  <h2
    style={{
      textAlign: "center",
      fontSize: "34px",
      marginBottom: "40px",
    }}
  >
    Industries We Serve
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "20px",
    }}
  >
    <div style={serviceCard}>Construction Companies</div>
    <div style={serviceCard}>Tradespeople</div>
    <div style={serviceCard}>Electricians</div>
    <div style={serviceCard}>Plumbers</div>
    <div style={serviceCard}>Landscaping Businesses</div>
    <div style={serviceCard}>Gyms & Fitness Brands</div>
    <div style={serviceCard}>Retail Businesses</div>
    <div style={serviceCard}>Hospitality & Catering</div>
  </div>
</section>

<section
  style={{
    background: "#b11b1b",
    padding: "50px",
    borderRadius: "16px",
    textAlign: "center",
    color: "white",
    marginBottom: "40px",
  }}
>
  <h2>Get a Free Workwear Quote</h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "20px auto",
      lineHeight: "1.8",
    }}
  >
    Looking for professional workwear printing in Kettering?
    Contact Kett Press Co today for a fast, no-obligation quote.
  </p>

  <a href="/#quote">
    <button
      style={{
        marginTop: "20px",
        padding: "14px 32px",
        background: "#f97316",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      Request a Quote
    </button>
  </a>
</section>
    </div>
  );
}
