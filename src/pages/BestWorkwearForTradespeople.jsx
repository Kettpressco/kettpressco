export default function BestWorkwearForTradespeople() {
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem,5vw,3.5rem)",
            marginBottom: "20px",
          }}
        >
          Best Workwear For Tradespeople
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Professional branded workwear helps your business look trustworthy,
          improves team identity, and promotes your company wherever you work.
          At Kett Press Co, we supply and print high-quality workwear for
          builders, electricians, plumbers, landscapers, mechanics, and other
          trades across Kettering and Northamptonshire.
        </p>
      </section>

      {/* Intro */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why Quality Workwear Matters</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Your workwear represents your business every day. Clean,
            professionally branded clothing helps customers identify your team
            and creates a more professional image. Durable garments also provide
            comfort and protection during long working days.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Whether you're working on a building site, visiting customer homes,
            or managing a commercial project, branded workwear can help build
            trust and improve brand visibility.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section style={sectionStyle}>
        <img
          src="/images/Polo.jpg"
          alt="Branded Workwear"
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* Trades */}
      <section style={sectionStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Recommended Workwear By Trade
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>Builders</h3>
            <p>
              Durable polo shirts, hoodies, hi-vis clothing and jackets designed
              for demanding construction environments.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Electricians</h3>
            <p>
              Lightweight embroidered polos and softshell jackets that provide
              a professional appearance when working in homes and businesses.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Plumbers</h3>
            <p>
              Comfortable polo shirts and branded hoodies that help promote your
              business while working on-site.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Landscapers</h3>
            <p>
              Hard-wearing clothing that can withstand outdoor conditions while
              keeping your branding visible.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Mechanics</h3>
            <p>
              Practical workwear with embroidered logos for a professional
              workshop appearance.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>General Trades</h3>
            <p>
              Custom printed and embroidered workwear suitable for all types of
              trade businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Popular Workwear We Print & Embroider</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Workwear Polo Shirts</li>
            <li>Custom Hoodies</li>
            <li>Hi-Visibility Clothing</li>
            <li>Softshell Jackets</li>
            <li>Fleeces</li>
            <li>Workwear T-Shirts</li>
            <li>Embroidered Uniforms</li>
            <li>Branded Team Clothing</li>
          </ul>
        </div>
      </section>

      {/* Printing Methods */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Printing vs Embroidery</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            For most tradespeople, embroidery offers a premium and durable
            finish, especially for polo shirts, fleeces and jackets. DTF
            printing is ideal for larger logos and detailed artwork where
            embroidery may not be suitable.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Our team can recommend the best branding method based on your logo,
            garment choice and budget.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Recent Workwear Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <img
            src="/images/Polo.jpg"
            alt="Workwear Project"
            style={{ width: "100%", borderRadius: "12px" }}
          />

          <img
            src="/images/Polo1.jpg"
            alt="Workwear Project"
            style={{ width: "100%", borderRadius: "12px" }}
          />

          <img
            src="/images/work1.jpg"
            alt="Workwear Project"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Contact */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Get A Workwear Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Looking for branded workwear for your team? We supply and print
            professional clothing for businesses throughout Kettering,
            Northamptonshire and surrounding areas.
          </p>

          <p>
            <strong>Kett Press Co</strong>
            <br />
            Kettering, Northamptonshire
            <br />
            Email: info@kettpressco.com
            <br />
            Phone: 07442 514098
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#000",
              color: "#fff",
              padding: "14px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Request A Quote
          </a>
        </div>
      </section>

      {/* Map */}
      <section style={{ paddingBottom: "60px" }}>
        <iframe
          title="Kettering Map"
          src="https://www.google.com/maps?q=Kettering,%20Northamptonshire&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}