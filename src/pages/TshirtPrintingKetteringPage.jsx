import { Link } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";

export default function TshirtPrintingKetteringPage() {
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "70px 20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "32px",
    borderRadius: "18px",
    boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  const textStyle = {
    lineHeight: "1.9",
    color: "#444",
    fontSize: "1.02rem",
  };

  const buttonStyle = {
    display: "inline-block",
    background: "#ff6b00",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "700",
  };

  const darkButtonStyle = {
    display: "inline-block",
    background: "#111",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "700",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url('/images/tshirt4.jpg') center/cover",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "700",
              fontSize: "0.85rem",
              marginBottom: "15px",
            }}
          >
            Custom Printing in Kettering
          </p>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              lineHeight: "1.15",
              marginBottom: "20px",
            }}
          >
            T-Shirt Printing Kettering
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#eee",
            }}
          >
            Professional custom T-shirt printing in Kettering for businesses,
            schools, sports teams, churches, charities, gyms and events.
            Choose your garment online, customise your print and order securely.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <Link to="/shop" style={buttonStyle}>
              Shop T-Shirts
            </Link>

            <Link to="/contact" style={darkButtonStyle}>
              Get A Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px 20px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          <div>✓ High-Quality DTF Printing</div>
          <div>✓ Small & Bulk Orders</div>
          <div>✓ Artwork Upload</div>
          <div>✓ Secure Online Payment</div>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Custom T-Shirt Printing in Kettering</h2>

          <p style={textStyle}>
            Kett Press Co provides professional T-shirt printing services in
            Kettering and across Northamptonshire. Whether you need branded
            business clothing, promotional T-shirts, gym wear, event
            merchandise or custom apparel for your organisation, we provide
            reliable printing and a straightforward ordering process.
          </p>

          <p style={textStyle}>
            We use DTF printing to create vibrant and durable prints suitable
            for a wide range of garments. Customers can now browse available
            products online, choose their preferred size and colour, upload
            artwork and complete payment securely by card.
          </p>
        </div>
      </section>

      {/* IMAGE + WHY CHOOSE US */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <img
            src="/images/work1.jpg"
            alt="Custom T-Shirt Printing Kettering"
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "25px",
            }}
          />

          <h2>Why Choose Kett Press Co?</h2>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
              paddingLeft: "20px",
            }}
          >
            <li>High-quality DTF printing</li>
            <li>Fast turnaround times</li>
            <li>Small and bulk orders available</li>
            <li>Online artwork upload</li>
            <li>Secure card checkout</li>
            <li>Business, event and sportswear printing</li>
            <li>Serving Kettering and Northamptonshire</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>T-Shirts We Print</h2>

          <p style={textStyle}>
            We provide custom printed T-shirts for a wide range of customers
            and organisations.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
              marginTop: "25px",
            }}
          >
            <div>🏢 Local Businesses</div>
            <div>🏗 Construction Companies</div>
            <div>⚽ Sports Clubs</div>
            <div>🏫 Schools & Colleges</div>
            <div>⛪ Churches</div>
            <div>❤️ Charities</div>
            <div>🏋️ Gyms & Fitness Brands</div>
            <div>🎉 Family Celebrations</div>
            <div>🎪 Events & Promotions</div>
            <div>👥 Community Groups</div>
          </div>
        </div>
      </section>

      {/* SHOP PRODUCTS */}
      <RelatedProducts
        categories={[
          "T-Shirt"
        ]}
        limit={4}
        title="Popular Custom T-Shirts"
      />

      {/* HOW TO ORDER */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>How to Order Your Custom T-Shirts</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "25px",
              marginTop: "25px",
            }}
          >
            <div>
              <h3>1. Choose Your T-Shirt</h3>
              <p style={textStyle}>
                Browse our online shop and select the garment you want.
              </p>
            </div>

            <div>
              <h3>2. Select Size & Colour</h3>
              <p style={textStyle}>
                Choose your preferred garment size and available colour.
              </p>
            </div>

            <div>
              <h3>3. Upload Your Artwork</h3>
              <p style={textStyle}>
                Upload your logo, design or artwork during the ordering process.
              </p>
            </div>

            <div>
              <h3>4. Order Online</h3>
              <p style={textStyle}>
                Add your customised garment to the cart and complete payment
                securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND IMAGE */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <img
            src="/images/event1.jpg"
            alt="Printed T-Shirts Kettering"
            style={{
              width: "100%",
              borderRadius: "14px",
            }}
          />
        </div>
      </section>

      {/* GEO SECTION */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Serving Kettering & Northamptonshire</h2>

          <p style={textStyle}>
            We provide T-shirt printing services throughout Kettering,
            Burton Latimer, Rothwell, Desborough, Corby, Wellingborough,
            Rushden and surrounding Northamptonshire areas.
          </p>

          <p style={textStyle}>
            Whether you require a single personalised T-shirt, branded
            clothing for your business or a larger order for an event, team or
            organisation, Kett Press Co can help.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section style={sectionStyle}>
        <div
          style={{
            ...cardStyle,
            background: "#111",
            color: "#fff",
            textAlign: "center",
            padding: "55px 30px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            }}
          >
            Ready to Order Custom Printed T-Shirts?
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#e5e5e5",
              maxWidth: "700px",
              margin: "20px auto",
            }}
          >
            Browse our T-shirt products and customise your order online, or
            contact Kett Press Co for a free quote for larger or more complex
            orders.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <Link to="/shop" style={buttonStyle}>
              Shop T-Shirts
            </Link>

            <Link to="/contact" style={darkButtonStyle}>
              Request A Quote
            </Link>
          </div>

          <div
            style={{
              marginTop: "35px",
              lineHeight: "2",
            }}
          >
            <p>
              ✉️{" "}
              <a
                href="mailto:info@kettpressco.com"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                info@kettpressco.com
              </a>
            </p>

            <p>
              📞{" "}
              <a
                href="tel:07742514098"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                07742 514098
              </a>
            </p>

            <p>📍 Kettering, Northamptonshire</p>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Serving Customers in Kettering</h2>

          <iframe
            title="Kettering Map"
            src="https://www.google.com/maps?q=Kettering,+Northamptonshire&output=embed"
            width="100%"
            height="400"
            style={{
              border: 0,
              borderRadius: "12px",
              marginTop: "15px",
            }}
            loading="lazy"
          />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Related Printing Services</h2>

          <p style={textStyle}>
            Looking for branded clothing for your business or team? Explore our
            workwear printing services in Kettering.
          </p>

          <Link
            to="/workwear-printing-kettering"
            style={{
              display: "inline-block",
              marginTop: "10px",
              color: "#111",
              fontWeight: "700",
            }}
          >
            Workwear Printing Kettering →
          </Link>
        </div>
      </section>
    </div>
  );
}