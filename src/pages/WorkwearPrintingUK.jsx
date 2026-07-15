export default function WorkwearPrintingUK() {
 import RelatedProducts from "../components/RelatedProducts";

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
    marginBottom: "30px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  };

  return (
    <>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          color: "#fff",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Workwear Printing UK
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Professional workwear printing UK service. Branded uniforms,
            personalised workwear, printed polo shirts, hoodies, hi-vis
            clothing and custom business apparel delivered across the UK.
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "30px",
              background: "#f97316",
              color: "#fff",
              padding: "15px 35px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Custom Workwear For UK Businesses</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co supplies custom workwear and branded clothing for
            businesses across the United Kingdom. Whether you need polo shirts,
            hoodies, sweatshirts, hi-vis garments or staff uniforms, we provide
            professional garment printing using high-quality DTF technology.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Branded workwear helps create a professional image while increasing
            brand recognition. Every employee becomes a visible representative
            of your business when wearing professionally printed clothing.
          </p>
        </div>

        <img
          src="/images/workwear4.jpg"
          alt="Workwear Printing UK"
          style={imageStyle}
        />
      </section>

      {/* BENEFITS */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Benefits Of Branded Workwear
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            <div style={cardStyle}>
              <h3>Professional Appearance</h3>
              <p>
                Create a consistent and trustworthy image for customers.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Brand Visibility</h3>
              <p>
                Promote your business everywhere your team works.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Team Identity</h3>
              <p>
                Help staff look united and professional.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Durable Printing</h3>
              <p>
                Long-lasting DTF prints designed for daily use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Printed Workwear Products</h2>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
            }}
          >
            <li>Printed Polo Shirts</li>
            <li>Branded Hoodies</li>
            <li>Custom Sweatshirts</li>
            <li>Printed T-Shirts</li>
            <li>Hi-Vis Workwear</li>
            <li>Trade Workwear</li>
            <li>Construction Clothing</li>
            <li>Warehouse Uniforms</li>
            <li>Retail Staff Uniforms</li>
            <li>Hospitality Clothing</li>
          </ul>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We work with businesses of all sizes, from sole traders to growing
            companies looking to standardise their team clothing.
          </p>
        </div>

        <img
          src="/images/PoloTshirt.jpg"
          alt="Branded Workwear UK"
          style={imageStyle}
        />
      </section>

      {/* INDUSTRIES */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Industries We Serve</h2>

            <ul
              style={{
                columns: 2,
                lineHeight: "2",
                color: "#444",
              }}
            >
              <li>Construction</li>
              <li>Electrical Contractors</li>
              <li>Plumbers</li>
              <li>Landscaping</li>
              <li>Retail</li>
              <li>Hospitality</li>
              <li>Cleaning Companies</li>
              <li>Logistics</li>
              <li>Warehousing</li>
              <li>Charities</li>
              <li>Schools</li>
              <li>Churches</li>
            </ul>
          </div>
        </div>
      </section>

      {/* UK DELIVERY */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Nationwide Workwear Printing UK</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Based in Kettering, Northamptonshire, Kett Press Co supplies
            printed workwear throughout the UK including London, Birmingham,
            Manchester, Liverpool, Leeds, Bristol, Leicester, Nottingham,
            Northampton and surrounding areas.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We offer fast production and reliable nationwide delivery to help
            businesses get the branded clothing they need.
          </p>
        </div>
      </section>

{/* RELATED WORKWEAR PRODUCTS */}
<RelatedProducts
  categories={[
    "Jacket",
    "Gilet",
    "Soft Shell Jacket",
    "Trousers",
    "Polo"
  ]}
  limit={4}
  title="Popular Branded Workwear"
/>


      {/* FAQ */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            Frequently Asked Questions
          </h2>

          <div style={cardStyle}>
            <h3>Do you print company logos?</h3>
            <p>
              Yes. We can print logos, branding and custom graphics on a wide
              range of workwear garments.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Do you have minimum order quantities?</h3>
            <p>
              No. We can produce small and large workwear orders.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>What printing method do you use?</h3>
            <p>
              We primarily use DTF printing, which provides excellent colour,
              detail and durability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Do you deliver across the UK?</h3>
            <p>
              Yes. We provide nationwide delivery throughout the United Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionStyle}>
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
          }}
        >
          <h2>Order Branded Workwear Today</h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#444",
            }}
          >
            Contact Kett Press Co for professional workwear printing, branded
            uniforms and custom business clothing delivered throughout the UK.
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "#f97316",
              color: "#fff",
              padding: "15px 35px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}