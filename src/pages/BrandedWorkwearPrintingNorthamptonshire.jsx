export default function BrandedWorkwearPrintingNorthamptonshire() {
  const sectionStyle = {
    padding: "70px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  const buttonStyle = {
    display: "inline-block",
    background: "#111",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    marginTop: "20px",
    fontWeight: "600",
  };

  const serviceBox = {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* HERO */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "20px",
          }}
        >
          Branded Workwear Printing Northamptonshire
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Professional branded workwear for businesses across
          Northamptonshire. We print logos on t-shirts, polo shirts,
          hoodies, hi-vis clothing, jackets and uniforms to help your team
          look professional and promote your business wherever they work.
        </p>

        <a href="/contact" style={buttonStyle}>
          Request A Quote
        </a>
      </section>

      {/* IMAGE SECTION */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <img
            src="/images/work1.jpg"
            alt="Branded Workwear Printing Northamptonshire"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <h2>Professional Custom Workwear For Every Industry</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Branded workwear helps create a professional image while keeping
            your business visible every day. Whether you need printed polo
            shirts for office staff, hoodies for tradespeople or hi-vis
            garments for construction teams, we provide high-quality logo
            printing designed to last.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Businesses throughout Northamptonshire use branded uniforms to
            improve team consistency, build customer trust and strengthen
            brand recognition. Durable logo printing and embroidery remain
            popular choices for professional workwear across many industries.
            :contentReference[oaicite:0]{index=0}
          </p>
        </div>

        {/* SERVICES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginTop: "40px",
          }}
        >
          <div style={serviceBox}>
            <h3>👕 Polo Shirt Printing</h3>
            <p>
              Professional branded polos ideal for office staff, retail teams
              and customer-facing businesses.
            </p>
          </div>

          <div style={serviceBox}>
            <h3>🦺 Hi-Vis Workwear</h3>
            <p>
              Printed hi-vis vests, jackets and safety clothing for
              construction and industrial environments.
            </p>
          </div>

          <div style={serviceBox}>
            <h3>👔 Company Uniforms</h3>
            <p>
              Consistent branding across your workforce with custom uniforms
              and staff apparel.
            </p>
          </div>

          <div style={serviceBox}>
            <h3>🧥 Hoodies & Jackets</h3>
            <p>
              Durable branded outerwear for trades, logistics and outdoor
              workers.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
              paddingLeft: "20px",
            }}
          >
            <li>High-quality DTF logo printing</li>
            <li>Fast turnaround times</li>
            <li>No complicated ordering process</li>
            <li>Bulk discounts available</li>
            <li>Local Northamptonshire service</li>
            <li>Suitable for small and large businesses</li>
          </ul>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We work with local businesses, tradespeople, gyms, schools,
            charities and event organisers throughout Northamptonshire,
            providing reliable branded clothing solutions. :contentReference[oaicite:1]{index=1}
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Industries We Serve</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <div>🏗 Construction Companies</div>
            <div>🔧 Tradespeople</div>
            <div>🚚 Logistics Businesses</div>
            <div>🏋️ Gyms & Fitness Brands</div>
            <div>🏢 Offices & Corporate Teams</div>
            <div>🏫 Schools & Colleges</div>
            <div>🍔 Hospitality Businesses</div>
            <div>🎪 Event Organisers</div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Serving Northamptonshire Businesses</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We provide branded workwear printing throughout Kettering,
            Northampton, Corby, Wellingborough, Rushden, Rothwell,
            Desborough, Burton Latimer and surrounding areas.
          </p>

          <iframe
            title="Kettering Map"
            src="https://www.google.com/maps?q=Kettering%20Northamptonshire&output=embed"
            width="100%"
            height="400"
            style={{
              border: 0,
              borderRadius: "12px",
              marginTop: "20px",
            }}
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2>Need Branded Workwear For Your Team?</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          Get a free quote for custom printed workwear, polo shirts, hoodies,
          uniforms and hi-vis clothing. We help businesses across
          Northamptonshire create professional branded apparel that stands
          out.
        </p>

        <a href="/contact" style={buttonStyle}>
          Get Your Free Quote
        </a>

        <div style={{ marginTop: "40px", lineHeight: "2" }}>
          <p>📍 Kettering, Northamptonshire</p>
          <p>📞 07770 118148</p>
          <p>✉️ info@kettpressco.com</p>
        </div>
      </section>
    </div>
  );
}