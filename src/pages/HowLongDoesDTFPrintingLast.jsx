export default function HowLongDoesDTFPrintingLast() {
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* Hero */}
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
          How Long Does DTF Printing Last?
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Direct To Film (DTF) printing is one of the most durable clothing
          decoration methods available today. When properly applied and cared
          for, DTF prints can last for years while maintaining vibrant colours
          and excellent detail.
        </p>
      </section>

      {/* Main Content */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>How Long Can DTF Prints Last?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            High-quality DTF prints can often last 50+ washes without noticeable
            fading or cracking. In many cases, the garment itself wears out
            before the print does.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            At Kett Press Co, we use professional DTF transfers and heat
            application techniques to ensure long-lasting results for workwear,
            sportswear, event clothing and promotional garments.
          </p>
        </div>
      </section>

      {/* Image */}
      <section style={sectionStyle}>
        <img
          src="/images/work1.jpg"
          alt="DTF Printed Garment"
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.12)",
          }}
        />
      </section>

      {/* Factors */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Factors That Affect DTF Print Lifespan
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>Print Quality</h3>
            <p>
              Premium transfers and quality inks produce stronger, longer
              lasting prints.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Application Method</h3>
            <p>
              Correct temperature, pressure and pressing time are essential for
              durability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Garment Quality</h3>
            <p>
              Better garments generally provide a more stable surface for DTF
              application.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Washing Care</h3>
            <p>
              Following proper washing instructions significantly extends print
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Washing Instructions */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>DTF Washing Instructions</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Wash garments inside out.</li>
            <li>Use cool or warm water.</li>
            <li>Avoid harsh bleach products.</li>
            <li>Do not iron directly onto the print.</li>
            <li>Tumble dry on low heat if necessary.</li>
            <li>Store garments folded or hanging properly.</li>
          </ul>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Following these simple care instructions helps preserve colour,
            flexibility and overall print appearance.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>DTF vs Vinyl Printing</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            DTF printing generally provides greater flexibility and durability
            for detailed artwork compared to traditional vinyl printing.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            DTF is particularly effective for full-colour designs, gradients and
            photographic images where vinyl may not be practical.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We specialise in high-quality DTF printing for businesses, schools,
            events, churches, sports clubs and personal clothing projects across
            Kettering and Northamptonshire.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Our focus is producing durable prints with sharp detail and vibrant
            colours that stand the test of time.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Recent DTF Printing Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <img
            src="/images/work1.jpg"
            alt="DTF Print"
            style={{ width: "100%", borderRadius: "12px" }}
          />

          <img
            src="/images/work2.jpg"
            alt="DTF Print"
            style={{ width: "100%", borderRadius: "12px" }}
          />

          <img
            src="/images/work3.jpg"
            alt="DTF Print"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Contact */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Get A Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Need custom printed clothing? Contact Kett Press Co today for a free
            quote on DTF printed t-shirts, hoodies, workwear and more.
          </p>

          <p>
            <strong>Kett Press Co</strong>
            <br />
            Kettering, Northamptonshire
            <br />
            Email: kettpressco@gmail.com
            <br />
            Phone: 07547 947457
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
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}