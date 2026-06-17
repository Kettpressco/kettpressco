import { Helmet } from "react-helmet-async";

export default function HiVisWorkwearPrintingKettering() {
  const sectionStyle = {
    maxWidth: "1200px",
    margin: "auto",
    padding: "60px 20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  const buttonStyle = {
    background: "#000",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "15px",
    fontWeight: "bold",
  };

  return (
    <>
      <Helmet>
        <title>
          Hi-Vis Workwear Printing Kettering | Custom Safety Clothing
        </title>
        <meta
          name="description"
          content="Professional hi-vis workwear printing in Kettering. Custom printed high-visibility vests, jackets, polos and safety clothing for businesses across Northamptonshire."
        />
      </Helmet>

      <div style={{ background: "#f7f7f7" }}>
        {/* Hero */}
        <section
          style={{
            background: "#000",
            color: "#fff",
            textAlign: "center",
            padding: "80px 20px",
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
            Hi-Vis Workwear Printing Kettering
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "auto",
              lineHeight: "1.8",
              color: "#ddd",
            }}
          >
            Professional hi-vis clothing printing for builders,
            electricians, landscapers, warehouse teams, contractors and
            businesses across Kettering and Northamptonshire.
          </p>

          <a href="/quote-calculator" style={buttonStyle}>
            Get Instant Quote
          </a>
        </section>

        <section style={sectionStyle}>
          {/* Main Content */}
          <div style={cardStyle}>
            <h2>Custom Printed Hi-Vis Workwear</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Kett Press Co provides custom hi-vis workwear printing in
              Kettering for businesses that need professional branded safety
              clothing. We print logos, company names and contact details onto
              a wide range of high-visibility garments.
            </p>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Whether you need a single hi-vis vest or a full company uniform
              package, we can supply durable, professional clothing designed
              for everyday use on construction sites, warehouses and industrial
              environments.
            </p>
          </div>

          {/* Services */}
          <div style={cardStyle}>
            <h2>Hi-Vis Clothing We Print</h2>

            <ul style={{ lineHeight: "2" }}>
              <li>Hi-Vis Vests</li>
              <li>Hi-Vis Polo Shirts</li>
              <li>Hi-Vis Hoodies</li>
              <li>Hi-Vis Jackets</li>
              <li>Hi-Vis Sweatshirts</li>
              <li>Construction Site Workwear</li>
              <li>Warehouse Staff Uniforms</li>
              <li>Traffic Management Clothing</li>
            </ul>
          </div>

          {/* Industries */}
          <div style={cardStyle}>
            <h2>Industries We Serve</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              We regularly supply branded hi-vis workwear for:
            </p>

            <ul style={{ lineHeight: "2" }}>
              <li>Builders</li>
              <li>Electricians</li>
              <li>Plumbers</li>
              <li>Roofers</li>
              <li>Groundworkers</li>
              <li>Warehouse Teams</li>
              <li>Landscapers</li>
              <li>Delivery Companies</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div style={cardStyle}>
            <h2>Why Choose Kett Press Co?</h2>

            <ul style={{ lineHeight: "2" }}>
              <li>Professional DTF printing</li>
              <li>Durable workwear branding</li>
              <li>Small and bulk orders welcome</li>
              <li>Fast turnaround times</li>
              <li>Competitive pricing</li>
              <li>Local Kettering business</li>
            </ul>
          </div>

          {/* FAQ */}
          <div style={cardStyle}>
            <h2>Frequently Asked Questions</h2>

            <h3>Can you print my company logo on hi-vis clothing?</h3>
            <p>
              Yes. We can print company logos, names, contact details and
              branding onto a range of hi-vis garments.
            </p>

            <h3>Do you offer small orders?</h3>
            <p>
              Yes. We can produce both small and large quantities depending on
              your requirements.
            </p>

            <h3>How long does printed hi-vis workwear last?</h3>
            <p>
              Our professional DTF printing process produces durable prints
              designed for regular washing and daily use.
            </p>
          </div>

          {/* CTA */}
          <div style={cardStyle}>
            <h2>Get a Quote Today</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Need branded hi-vis workwear in Kettering? Use our instant quote
              calculator or contact us for a personalised quotation.
            </p>

            <a href="/quote-calculator" style={buttonStyle}>
              Instant Quote Calculator
            </a>
          </div>

          {/* Map */}
          <div style={cardStyle}>
            <h2>Kettering & Northamptonshire Coverage</h2>

            <iframe
              title="Kettering Map"
              src="https://www.google.com/maps?q=Kettering,+Northamptonshire&output=embed"
              width="100%"
              height="400"
              style={{
                border: 0,
                borderRadius: "12px",
              }}
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </>
  );
}