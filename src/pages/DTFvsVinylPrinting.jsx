export default function DTFvsVinylPrinting() {
  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    marginRight: "15px",
    marginTop: "15px",
  };
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is DTF better than vinyl printing?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "DTF printing is generally better for detailed logos and multi-colour artwork."
      }
    },
    {
      "@type": "Question",
      name: "Which lasts longer, DTF or vinyl?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Both printing methods are durable when professionally applied."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kett Press Co",
  telephone: "+447770118148",
  email: "info@kettpressco.com",
  url: "https://kettpressco.com"
};
  return (
    <div style={{ background: "#f7f7f7" }}>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(localBusinessSchema),
  }}
/>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg,#111 0%,#222 60%,#D62828 100%)",
          color: "#fff",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                background: "#fff",
                color: "#D62828",
                padding: "8px 18px",
                borderRadius: "30px",
                fontWeight: "600",
              }}
            >
              Kett Press Co Guide
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem,5vw,4rem)",
                marginTop: "20px",
                lineHeight: "1.1",
              }}
            >
              DTF vs Vinyl Printing
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                marginTop: "20px",
              }}
            >
              Looking for custom workwear, polo shirts or branded clothing?
              Here's a simple comparison of DTF printing and Vinyl printing
              to help you choose the best option for your business.
            </p>

            <a
              href="https://wa.me/447770118148"
              target="_blank"
              rel="noreferrer"
              style={{
                ...buttonStyle,
                background: "#25D366",
                color: "#fff",
              }}
            >
              Get a Free Quote
            </a>

            <a
              href="tel:07770118148"
              style={{
                ...buttonStyle,
                background: "#fff",
                color: "#111",
              }}
            >
              Call Now
            </a>
          </div>

          <img
            src="/images/PoloTshirt.jpg"
            alt="Custom printed polo shirts in Kettering"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </section>

      {/* CONTENT */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 20px",
        }}
      >
        <div style={cardStyle}>
          <h2>What Is DTF Printing?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            DTF (Direct To Film) printing transfers full-colour artwork onto
            garments using specialist film and heat application. It is ideal
            for detailed logos, gradients and multi-colour designs.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>What Is Vinyl Printing?</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Vinyl printing uses coloured vinyl that is cut and heat pressed
            onto garments. It works best for names, numbers and simple text.
          </p>
        </div>

        {/* GALLERY */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
            marginBottom: "30px",
          }}
        >
          <img
            src="/images/polo.jpg"
            alt="Branded polo shirts"
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          />

          <img
            src="/images/polo1.jpg"
            alt="Custom workwear printing"
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
          />
        </div>

        <div style={cardStyle}>
          <h2>Which Printing Method Is Best?</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td style={{ padding: "15px", fontWeight: "600" }}>
                  Full Colour Logos
                </td>
                <td style={{ padding: "15px" }}>✅ DTF</td>
              </tr>

              <tr>
                <td style={{ padding: "15px", fontWeight: "600" }}>
                  Detailed Artwork
                </td>
                <td style={{ padding: "15px" }}>✅ DTF</td>
              </tr>

              <tr>
                <td style={{ padding: "15px", fontWeight: "600" }}>
                  Names & Numbers
                </td>
                <td style={{ padding: "15px" }}>✅ Vinyl</td>
              </tr>

              <tr>
                <td style={{ padding: "15px", fontWeight: "600" }}>
                  Sports Kits
                </td>
                <td style={{ padding: "15px" }}>✅ Vinyl</td>
              </tr>

              <tr>
                <td style={{ padding: "15px", fontWeight: "600" }}>
                  Company Workwear
                </td>
                <td style={{ padding: "15px" }}>✅ DTF</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={cardStyle}>
          <h2>Our Recommendation</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            For most businesses, DTF printing is the better choice because it
            allows detailed logos, unlimited colours and a professional finish
            across polo shirts, hoodies, T-shirts and workwear.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Vinyl printing remains an excellent option for names, numbers,
            sports teams and simple one-colour designs.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>⭐ 11 Google Reviews</li>
            <li>✓ Fast turnaround times</li>
            <li>✓ High-quality DTF printing</li>
            <li>✓ Workwear, polos, hoodies & T-shirts</li>
            <li>✓ Serving Kettering & Northamptonshire</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2>Get a Free Quote Today</h2>

          <p style={{ lineHeight: "1.8" }}>
            Need branded workwear, polo shirts, hoodies or custom T-shirts?
            Contact Kett Press Co for expert advice and competitive pricing.
          </p>

          <p>
            📞 07770 118148 <br />
            ✉️ info@kettpressco.com
          </p>

          <a
            href="https://wa.me/447770118148"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}