import { useEffect } from "react";
import RelatedProducts from "../components/RelatedProducts";

const sectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "70px 20px",
};

const serviceCard = {
  background: "#fff",
  padding: "28px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  height: "100%",
};

const primaryButton = {
  display: "inline-block",
  background: "#f97316",
  color: "#fff",
  border: "none",
  padding: "15px 30px",
  borderRadius: "9px",
  textDecoration: "none",
  fontWeight: "700",
  cursor: "pointer",
};

const darkButton = {
  display: "inline-block",
  background: "#111",
  color: "#fff",
  border: "none",
  padding: "15px 30px",
  borderRadius: "9px",
  textDecoration: "none",
  fontWeight: "700",
  cursor: "pointer",
};

const whatsappButton = {
  display: "inline-block",
  background: "#25D366",
  color: "#fff",
  border: "none",
  padding: "15px 30px",
  borderRadius: "9px",
  textDecoration: "none",
  fontWeight: "700",
  cursor: "pointer",
};

const textStyle = {
  lineHeight: "1.9",
  color: "#444",
  fontSize: "1.02rem",
};

export default function TshirtPrintingKettering() {
  useEffect(() => {
    document.title =
      "T-Shirt Printing Kettering | Custom Printed T-Shirts | Kett Press Co";

    const existingMeta = document.querySelector(
      'meta[name="description"]'
    );

    const previousContent = existingMeta?.content;

    let meta = existingMeta;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Professional T-shirt printing in Kettering for businesses, events, schools, gyms and organisations. Customise and order printed T-shirts online or request a free quote from Kett Press Co.";

    return () => {
      if (existingMeta) {
        meta.content = previousContent || "";
      } else if (meta?.parentNode) {
        meta.parentNode.removeChild(meta);
      }
    };
  }, []);

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url('/images/tshirt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          padding: "110px 20px",
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
              fontSize: "clamp(2.3rem, 6vw, 4.2rem)",
              lineHeight: "1.15",
              marginBottom: "22px",
            }}
          >
            T-Shirt Printing in Kettering
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#eee",
            }}
          >
            Professional custom T-shirt printing for businesses, events,
            gyms, schools, charities and organisations across Kettering and
            Northamptonshire.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            <a href="/shop" style={primaryButton}>
              Shop T-Shirts
            </a>

            <a href="/#quote" style={darkButton}>
              Get a Free Quote
            </a>

            <a
              href="https://wa.me/447742514098"
              target="_blank"
              rel="noreferrer"
              style={whatsappButton}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8e8e8",
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
            color: "#222",
          }}
        >
          <div>✓ Custom Printing</div>
          <div>✓ Small & Bulk Orders</div>
          <div>✓ Artwork Upload</div>
          <div>✓ Secure Online Payment</div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section style={sectionStyle}>
        <div
          style={{
            background: "#fff",
            padding: "35px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              marginBottom: "20px",
            }}
          >
            Custom T-Shirt Printing for Kettering Businesses & Organisations
          </h2>

          <p style={textStyle}>
            Kett Press Co provides professional T-shirt printing in Kettering
            for businesses, gyms, events, schools, charities, community
            groups and organisations. Whether you need a single personalised
            T-shirt or a larger branded order for a team, we can help create
            clothing that represents your brand, event or idea.
          </p>

          <p style={textStyle}>
            You can now browse products online, choose your garment, select
            your size and colour, add printing options, upload your artwork
            and pay securely by card.
          </p>

          <p style={textStyle}>
            For larger or more complex orders, you can still request a
            personalised quote and discuss your requirements with us directly.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionStyle}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              marginBottom: "15px",
            }}
          >
            Our T-Shirt Printing Services
          </h2>

          <p
            style={{
              ...textStyle,
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Printed clothing for businesses, teams, events, schools and
            organisations throughout Kettering and Northamptonshire.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          <div style={serviceCard}>
            <h3>Custom Business T-Shirts</h3>

            <p style={textStyle}>
              Professional branded T-shirts for companies, staff teams and
              local organisations.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Event Merchandise</h3>

            <p style={textStyle}>
              Custom printed apparel for events, promotions, fundraisers,
              clubs and special occasions.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Gym & Fitness Apparel</h3>

            <p style={textStyle}>
              Printed T-shirts and branded clothing for personal trainers,
              gyms, fitness teams and sports brands.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Staff & Team Clothing</h3>

            <p style={textStyle}>
              Create a consistent professional appearance with branded
              clothing for your staff or team.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>Promotional T-Shirts</h3>

            <p style={textStyle}>
              Printed garments for marketing campaigns, product launches,
              giveaways and promotional events.
            </p>
          </div>

          <div style={serviceCard}>
            <h3>School & Group Orders</h3>

            <p style={textStyle}>
              Custom printed T-shirts for schools, clubs, youth groups,
              charities and community organisations.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={sectionStyle}>
        <div
          style={{
            background: "#fff",
            padding: "40px 30px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              marginBottom: "35px",
            }}
          >
            Why Choose Kett Press Co?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={serviceCard}>
              <h3>Premium DTF Printing</h3>

              <p style={textStyle}>
                High-quality, durable printing suitable for professional
                custom clothing.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Small & Bulk Orders</h3>

              <p style={textStyle}>
                Suitable for individual orders, small teams and larger
                business quantities.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Online Ordering</h3>

              <p style={textStyle}>
                Choose your product, upload artwork and pay securely through
                our online shop.
              </p>
            </div>

            <div style={serviceCard}>
              <h3>Local Service</h3>

              <p style={textStyle}>
                Based in Kettering and serving customers across
                Northamptonshire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <RelatedProducts
        categories={[
          "T-Shirt"
        ]}
        limit={4}
        title="Popular Custom T-Shirts"
      />

      {/* HOW TO ORDER */}
      <section style={sectionStyle}>
        <div
          style={{
            background: "#fff",
            padding: "40px 30px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              marginBottom: "35px",
            }}
          >
            How to Order Custom T-Shirts
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "30px",
            }}
          >
            <div>
              <h3>1. Choose Your T-Shirt</h3>

              <p style={textStyle}>
                Browse the shop and select the garment, size and colour you
                want.
              </p>
            </div>

            <div>
              <h3>2. Choose Your Printing</h3>

              <p style={textStyle}>
                Add front, back, sleeve or other available printing options.
              </p>
            </div>

            <div>
              <h3>3. Upload Your Artwork</h3>

              <p style={textStyle}>
                Upload your logo, design or artwork directly through the
                product page.
              </p>
            </div>

            <div>
              <h3>4. Pay Securely</h3>

              <p style={textStyle}>
                Add your customised product to the cart and complete your
                order securely online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section style={sectionStyle}>
        <div
          style={{
            background: "#fff",
            padding: "40px 30px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              marginBottom: "20px",
            }}
          >
            T-Shirt Printing in Kettering & Northamptonshire
          </h2>

          <p style={textStyle}>
            We provide custom T-shirt printing for customers in Kettering and
            surrounding areas across Northamptonshire. Our services are
            suitable for businesses, tradespeople, schools, gyms, churches,
            charities, clubs and event organisers.
          </p>

          <p style={textStyle}>
            Whether you are ordering branded clothing for your company or
            creating a personalised design for an event, Kett Press Co offers
            a simple way to customise and order printed clothing.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "20px",
            }}
          >
            Ready to Order Custom T-Shirts?
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
              color: "#e5e5e5",
              fontSize: "1.05rem",
            }}
          >
            Browse our T-shirts and customise your order online, or contact
            Kett Press Co for a personalised quote for larger orders.
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
            <a href="/shop" style={primaryButton}>
              Shop T-Shirts
            </a>

            <a href="/#quote" style={darkButton}>
              Request a Quote
            </a>

            <a href="tel:07742514098" style={whatsappButton}>
              Call 07742 514098
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}