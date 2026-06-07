export default function WorkwearPrintingKettering() {
  return (
   <div
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/work3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "140px 20px 120px",
    borderRadius: "20px",
    marginBottom: "60px",
  }}
>
 <h1
  style={{
    fontSize: "clamp(40px,5vw,60px)",
    lineHeight: "1.2",
    marginBottom: "25px",
    marginTop: "0",
  }}
>
  Workwear Printing in Kettering
</h1>

  <p
  style={{
    maxWidth: "750px",
    margin: "0 auto 50px auto",
    fontSize: "20px",
    lineHeight: "1.8",
    textAlign: "center",
  }}
>
  Professional branded workwear for businesses across
  Kettering and Northamptonshire. From hi-vis clothing,
  polo shirts and hoodies to jackets and complete staff
  uniforms.
</p>



<section
  style={{
    marginTop: "40px",
    marginBottom: "60px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "25px",
      fontSize: "32px",
    }}
  >
    Professional Workwear Printing
  </h2>

  <p
    style={{
      lineHeight: "1.8",
      marginBottom: "20px",
    }}
  >
    Branded workwear helps your business stand out and builds trust with
    customers. Whether you need uniforms for your staff, branded clothing
    for events, or durable garments for everyday work, we provide reliable
    printing with excellent attention to detail.
  </p>

  <p
    style={{
      lineHeight: "1.8",
    }}
  >
    We work with businesses throughout Kettering, Northampton,
    Wellingborough, Corby and the wider Northamptonshire area.
  </p>
</section>

      <h2
  style={{
    textAlign: "center",
    marginBottom: "30px",
  }}
>
  Recent Workwear Projects
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "20px",
    marginBottom: "60px",
  }}
>
  <img
    src="/images/work4.jpg"
    alt="Printed Workwear"
    style={{
      width: "100%",
      borderRadius: "12px",
    }}
  />

  <img
    src="/images/work2.jpg"
    alt="Custom Uniforms"
    style={{
      width: "100%",
      borderRadius: "12px",
    }}
  />

  <img
    src="/images/work3.jpg"
    alt="Branded Work Clothing"
    style={{
      width: "100%",
      borderRadius: "12px",
    }}
  />
</div>

      <section style={{ marginBottom: "60px" }}>
        <h2>Workwear We Print</h2>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "10px",
            paddingLeft: "20px",
          }}
        >
          <li>Polo Shirts</li>
          <li>T-Shirts</li>
          <li>Hoodies</li>
          <li>Sweatshirts</li>
          <li>Hi-Visibility Clothing</li>
          <li>Jackets</li>
          <li>Uniforms</li>
          <li>Staff Clothing</li>
        </ul>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2>Why Choose Kett Press Co?</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div>✓ Premium DTF Printing</div>
          <div>✓ Fast Turnaround</div>
          <div>✓ Bulk Order Pricing</div>
          <div>✓ Professional Quality Checks</div>
          <div>✓ Northamptonshire Based</div>
          <div>✓ Friendly Personal Service</div>
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2>Who We Work With</h2>

        <p>
          We provide custom workwear printing for:
        </p>

        <ul style={{ paddingLeft: "20px" }}>
          <li>Construction Companies</li>
          <li>Tradespeople</li>
          <li>Electricians</li>
          <li>Plumbers</li>
          <li>Landscapers</li>
          <li>Gyms & Fitness Businesses</li>
          <li>Retail Businesses</li>
          <li>Hospitality & Catering Companies</li>
        </ul>
      </section>

      <section
        style={{
          background: "#b11b1bff",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
        }}
      >
        <h2>Get a Free Workwear Quote</h2>
        

        <p>
          Looking for professional workwear printing in Kettering?
          Contact Kett Press Co today for a fast, no-obligation quote.
        </p>
        

        <a href="/#quote">
          <button
            style={{
              marginTop: "20px",
              padding: "14px 32px",
              background: "#f97316",
              color: "#06180bff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Request a Quote
          </button>
        </a>
      </section>
    </div>
  );
}