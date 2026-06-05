export default function WorkwearPrintingKettering() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "100px 20px",
        lineHeight: "1.8",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(36px,5vw,52px)",
          marginBottom: "20px",
          color: "#111",
        }}
      >
        Workwear Printing in Kettering
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#555",
          marginBottom: "40px",
        }}
      >
        Professional branded workwear for businesses across Kettering and
        Northamptonshire. From small teams to large organisations, Kett Press Co
        provides high-quality printed workwear designed to promote your brand
        and create a professional image.
      </p>

      <section style={{ marginBottom: "60px" }}>
        <h2>Professional Workwear Printing</h2>

        <p>
          Branded workwear helps your business stand out and builds trust with
          customers. Whether you need uniforms for your staff, branded clothing
          for events, or durable garments for everyday work, we provide reliable
          printing with excellent attention to detail.
        </p>

        <p>
          We work with businesses throughout Kettering, Northampton,
          Wellingborough, Corby, and the wider Northamptonshire area.
        </p>
      </section>

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
          background: "#f8f8f8",
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
              color: "#fff",
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