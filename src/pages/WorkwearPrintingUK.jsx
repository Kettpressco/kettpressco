import RelatedProducts from "../components/RelatedProducts";

export default function WorkwearPrintingUK() {
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

  const buttonStyle = {
    display: "inline-block",
    background: "#f97316",
    color: "#fff",
    padding: "15px 35px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "#ea580c",
    fontWeight: "600",
    textDecoration: "underline",
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
          <h1
            style={{
              fontSize: "clamp(2.3rem, 5vw, 3.5rem)",
              marginBottom: "20px",
            }}
          >
            Workwear Printing UK
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Professional workwear printing for businesses across the UK.
            Shop branded polo shirts, hoodies, jackets, gilets, trousers
            and personalised business clothing with custom logo printing.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <a href="#shop-workwear" style={buttonStyle}>
              Shop Workwear
            </a>

            <a
              href="/contact"
              style={{
                ...buttonStyle,
                background: "#fff",
                color: "#111827",
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Custom Workwear For UK Businesses</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co supplies custom workwear and branded clothing for
            businesses across the United Kingdom. Whether you need polo shirts,
            hoodies, sweatshirts, jackets, gilets, trousers, hi-vis garments or
            staff uniforms, we provide professional garment printing for small
            and large orders.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Branded workwear can help your team create a professional and
            consistent appearance while increasing awareness of your company.
            Your employees can represent your brand while working on-site,
            visiting customers or travelling between jobs.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            You can browse selected workwear products directly on this page and
            choose garments suitable for printing with your company logo or
            branding.
          </p>
        </div>

        <img
          src="/images/workwear4.jpg"
          alt="Professional branded workwear printing UK"
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
            Why Choose Branded Workwear?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            <div style={cardStyle}>
              <h3>Professional Appearance</h3>

              <p style={{ lineHeight: "1.7", color: "#555" }}>
                Give your employees a consistent and professional appearance
                when representing your company.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Brand Visibility</h3>

              <p style={{ lineHeight: "1.7", color: "#555" }}>
                Display your logo and business branding while your team works
                in public or visits customers.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Team Identity</h3>

              <p style={{ lineHeight: "1.7", color: "#555" }}>
                Help your staff look organised, recognisable and part of one
                professional team.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Durable Printing</h3>

              <p style={{ lineHeight: "1.7", color: "#555" }}>
                We use high-quality garment printing methods designed for
                professional workwear and regular use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS INFORMATION */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Printed Workwear Products</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We can customise a wide range of garments suitable for businesses,
            tradespeople and organisations.
          </p>

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
            <li>Workwear Jackets</li>
            <li>Soft Shell Jackets</li>
            <li>Branded Gilets</li>
            <li>Work Trousers</li>
            <li>Hi-Vis Workwear</li>
            <li>Trade Workwear</li>
            <li>Construction Clothing</li>
            <li>Warehouse Uniforms</li>
            <li>Retail Staff Uniforms</li>
            <li>Hospitality Clothing</li>
          </ul>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We work with businesses of all sizes, from sole traders ordering
            clothing for themselves to growing companies looking to create
            consistent uniforms across their workforce.
          </p>
        </div>

        <img
          src="/images/PoloTshirt.jpg"
          alt="Printed polo shirts and branded workwear UK"
          style={imageStyle}
        />
      </section>

      {/* SHOP PRODUCTS */}
      <section
        id="shop-workwear"
        style={{
          background: "#f8fafc",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 40px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                marginBottom: "15px",
              }}
            >
              Shop Branded Workwear
            </h2>

            <p
              style={{
                lineHeight: "1.8",
                color: "#555",
                fontSize: "1.05rem",
              }}
            >
              Browse popular workwear products available for custom printing.
              Choose your garment, colour and size, then personalise your
              workwear with your company branding.
            </p>
          </div>

          <RelatedProducts
            categories={[
              "Jacket",
              "Gilet",
              "Soft Shell Jacket",
              "Trousers",
              "Polo",
            ]}
            limit={8}
            title="Popular Workwear Products"
          />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Industries We Serve</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Our personalised workwear is suitable for a wide range of
            businesses and organisations throughout the UK.
          </p>

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
            <li>Builders</li>
            <li>Landscaping</li>
            <li>Retail</li>
            <li>Hospitality</li>
            <li>Cleaning Companies</li>
            <li>Logistics</li>
            <li>Warehousing</li>
            <li>Charities</li>
            <li>Schools</li>
            <li>Churches</li>
            <li>Gyms</li>
            <li>Events</li>
            <li>Small Businesses</li>
          </ul>
        </div>
      </section>

      {/* LOCAL SEO / UK DELIVERY */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Nationwide Workwear Printing UK</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Based in Kettering, Northamptonshire, Kett Press Co supplies
              printed and branded workwear to businesses throughout the UK,
              including London, Birmingham, Manchester, Liverpool, Leeds,
              Bristol, Leicester, Nottingham, Northampton and surrounding
              areas.
            </p>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              We offer nationwide delivery to help businesses across the
              country order professional branded clothing for their teams.
            </p>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Businesses based closer to us can also explore our{" "}
              <a
                href="/branded-workwear-printing-northamptonshire"
                style={linkStyle}
              >
                branded workwear printing in Northamptonshire
              </a>{" "}
              service for custom uniforms, printed workwear and personalised
              business clothing across Northampton and the surrounding area.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={sectionStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          How To Order Your Branded Workwear
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>1. Choose Your Workwear</h3>

            <p style={{ lineHeight: "1.7", color: "#555" }}>
              Browse our available workwear products and select the garments
              suitable for your business.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>2. Add Your Branding</h3>

            <p style={{ lineHeight: "1.7", color: "#555" }}>
              Upload your artwork or provide your company logo when
              customising your order.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>3. Place Your Order</h3>

            <p style={{ lineHeight: "1.7", color: "#555" }}>
              Complete your order online or contact us if you need help with
              larger or more complex workwear requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
            Frequently Asked Questions
          </h2>

          <div style={cardStyle}>
            <h3>Do you print company logos on workwear?</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Yes. We can print company logos, branding and custom graphics on
              a wide range of workwear garments including polo shirts, hoodies,
              jackets and other business clothing.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Do you have minimum order quantities?</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              No. We can produce both small and large workwear orders, making
              our service suitable for sole traders, small businesses and
              larger teams.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>What printing method do you use?</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              We primarily use DTF printing, which can provide excellent
              colour, detail and durability across many suitable garment
              types.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Can I order workwear directly online?</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Yes. You can browse selected workwear products on this page,
              customise your garment and continue through the online ordering
              process.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Do you deliver workwear across the UK?</h3>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Yes. We provide nationwide delivery throughout the United
              Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={sectionStyle}>
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
            padding: "50px 30px",
          }}
        >
          <h2>Order Branded Workwear Today</h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#444",
              maxWidth: "750px",
              margin: "0 auto 20px",
            }}
          >
            Browse our workwear products or contact Kett Press Co for
            professional workwear printing, branded uniforms and custom
            business clothing delivered throughout the UK.
          </p>

          <p
            style={{
              lineHeight: "1.9",
              color: "#444",
              maxWidth: "750px",
              margin: "0 auto 30px",
            }}
          >
            For businesses in Northampton and surrounding areas, see our{" "}
            <a
              href="/branded-workwear-printing-northamptonshire"
              style={linkStyle}
            >
              branded workwear printing Northamptonshire
            </a>{" "}
            service.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a href="#shop-workwear" style={buttonStyle}>
              Shop Workwear
            </a>

            <a
              href="/contact"
              style={{
                ...buttonStyle,
                background: "#111827",
              }}
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}