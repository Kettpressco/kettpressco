import { Helmet } from "react-helmet-async";
import RelatedProducts from "../components/RelatedProducts";

export default function BrandedWorkwearPrintingNorthamptonshire() {
  const sectionStyle = {
    padding: "70px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "#fff",
    padding: "32px",
    borderRadius: "18px",
    boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
    marginBottom: "30px",
  };

  const buttonStyle = {
    display: "inline-block",
    background: "#111",
    color: "#fff",
    padding: "15px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    marginTop: "20px",
    fontWeight: "700",
  };

  const secondaryButtonStyle = {
    display: "inline-block",
    background: "#fff",
    color: "#111",
    padding: "15px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    marginTop: "20px",
    marginLeft: "12px",
    fontWeight: "700",
  };

  const serviceBox = {
    background: "#fff",
    padding: "26px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.07)",
    height: "100%",
  };

  const textStyle = {
    lineHeight: "1.9",
    color: "#444",
    fontSize: "1.02rem",
  };

  const headingStyle = {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    marginBottom: "20px",
    color: "#111",
  };

  return (
    <>
      <Helmet>
        <title>
          Branded Workwear Printing Northampton | Kett Press Co
        </title>

        <meta
          name="description"
          content="Professional branded workwear printing in Northampton and Northamptonshire. Custom polo shirts, t-shirts, hoodies, hi-vis, jackets and uniforms for businesses, tradespeople and teams."
        />

        <meta
          name="keywords"
          content="workwear northampton, branded workwear northampton, workwear printing northampton, custom workwear northamptonshire, printed workwear northampton, personalised workwear northampton"
        />

        <link
          rel="canonical"
          href="https://www.kettpressco.com/branded-workwear-printing-northamptonshire"
        />
      </Helmet>

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
          <div
            style={{
              maxWidth: "950px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: "700",
                marginBottom: "16px",
                fontSize: "0.9rem",
              }}
            >
              Professional Workwear Printing
            </p>

            <h1
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                lineHeight: "1.15",
                marginBottom: "24px",
                padding: "0 10px",
              }}
            >
              Branded Workwear Printing in Northampton & Northamptonshire
            </h1>

            <p
              style={{
                maxWidth: "850px",
                margin: "0 auto",
                fontSize: "1.15rem",
                lineHeight: "1.8",
                color: "#e5e5e5",
              }}
            >
              Professional branded workwear for businesses in Northampton,
              Kettering and across Northamptonshire. We print company logos on
              polo shirts, t-shirts, hoodies, sweatshirts, hi-vis clothing,
              jackets and uniforms for tradespeople, construction companies and
              local businesses.
            </p>

            <div
              style={{
                marginTop: "18px",
              }}
            >
              <a href="/contact" style={buttonStyle}>
                Request A Free Quote
              </a>

              <a href="/shop" style={secondaryButtonStyle}>
                Browse Workwear
              </a>
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
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "20px",
              textAlign: "center",
              fontWeight: "700",
              color: "#222",
            }}
          >
            <div>✓ Professional Logo Printing</div>
            <div>✓ Small & Bulk Orders</div>
            <div>✓ Fast Turnaround</div>
            <div>✓ Northamptonshire Based</div>
          </div>
        </section>

        {/* INTRO */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <img
              src="/images/PoloTshirt.jpg"
              alt="Branded workwear printing in Northampton and Northamptonshire"
              style={{
                width: "100%",
                maxHeight: "520px",
                objectFit: "cover",
                borderRadius: "14px",
                marginBottom: "30px",
              }}
            />

            <h2 style={headingStyle}>
              Branded Workwear Printing for Northampton Businesses
            </h2>

            <p style={textStyle}>
              Looking for workwear printing in Northampton? Kett Press Co
              supplies professional branded workwear for local businesses,
              tradespeople and organisations across Northampton and
              Northamptonshire.
            </p>

            <p style={textStyle}>
              Add your company logo to polo shirts, t-shirts, hoodies,
              sweatshirts, jackets and hi-vis clothing to give your team a
              consistent, professional appearance while promoting your business
              wherever they work.
            </p>

            <p style={textStyle}>
              Whether you need a small order for a growing business or branded
              clothing for a larger workforce, we can help you create durable
              custom workwear that reflects your brand.
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
            <h2 style={headingStyle}>Custom Workwear We Can Print</h2>

            <p
              style={{
                ...textStyle,
                maxWidth: "760px",
                margin: "0 auto",
              }}
            >
              Choose from a wide range of garments suitable for office teams,
              tradespeople, construction workers, hospitality staff, delivery
              teams and customer-facing businesses.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            <div style={serviceBox}>
              <h3>👕 Polo Shirt Printing</h3>

              <p style={textStyle}>
                Smart branded polo shirts for office staff, retail teams,
                hospitality businesses and customer-facing employees.
              </p>
            </div>

            <div style={serviceBox}>
              <h3>🦺 Hi-Vis Workwear</h3>

              <p style={textStyle}>
                Custom printed hi-vis vests and jackets for construction,
                logistics, warehousing and industrial environments.
              </p>
            </div>

            <div style={serviceBox}>
              <h3>👔 Company Uniforms</h3>

              <p style={textStyle}>
                Create a consistent and professional look across your workforce
                with branded company clothing and staff uniforms.
              </p>
            </div>

            <div style={serviceBox}>
              <h3>🧥 Hoodies & Sweatshirts</h3>

              <p style={textStyle}>
                Comfortable branded hoodies and sweatshirts for tradespeople,
                teams, staff and outdoor working environments.
              </p>
            </div>

            <div style={serviceBox}>
              <h3>👚 Printed Work T-Shirts</h3>

              <p style={textStyle}>
                Practical company t-shirts printed with your logo, business name
                or branding for everyday workwear.
              </p>
            </div>

            <div style={serviceBox}>
              <h3>🧤 Jackets & Outerwear</h3>

              <p style={textStyle}>
                Branded jackets and outerwear designed to keep your team looking
                professional in colder and outdoor working conditions.
              </p>
            </div>
          </div>
        </section>

        {/* NORTHAMPTON SEO SECTION */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2 style={headingStyle}>Workwear Printing in Northampton</h2>

            <p style={textStyle}>
              We provide custom workwear printing for businesses throughout
              Northampton and the surrounding areas. Whether you run a
              construction company, plumbing business, electrical firm,
              landscaping company, cleaning business, garage, delivery company
              or independent trade, we can help create branded clothing for
              your team.
            </p>

            <p style={textStyle}>
              Our Northampton workwear printing service is suitable for both
              small businesses and larger organisations. You can order branded
              polo shirts, t-shirts, hoodies, sweatshirts, jackets and hi-vis
              garments with your company logo.
            </p>

            <p style={textStyle}>
              Branded workwear can help your business look more professional,
              build customer trust and increase brand visibility while your
              employees are working on-site or meeting customers.
            </p>

            <a href="/contact" style={buttonStyle}>
              Get A Northampton Workwear Quote
            </a>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2 style={headingStyle}>Why Choose Kett Press Co?</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "18px",
                marginTop: "30px",
              }}
            >
              <div style={serviceBox}>
                <h3>High-Quality Printing</h3>
                <p style={textStyle}>
                  Durable logo printing designed for professional everyday
                  workwear.
                </p>
              </div>

              <div style={serviceBox}>
                <h3>Small & Large Orders</h3>
                <p style={textStyle}>
                  Suitable for sole traders, small teams and larger companies.
                </p>
              </div>

              <div style={serviceBox}>
                <h3>Bulk Discounts</h3>
                <p style={textStyle}>
                  Competitive pricing is available for larger quantities and
                  team orders.
                </p>
              </div>

              <div style={serviceBox}>
                <h3>Local Service</h3>
                <p style={textStyle}>
                  Based in Northamptonshire and serving businesses throughout
                  the local area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2 style={headingStyle}>Industries We Serve</h2>

            <p style={textStyle}>
              We supply branded workwear to a wide range of businesses and
              organisations across Northamptonshire.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: "18px",
                marginTop: "30px",
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
              <div>🧹 Cleaning Companies</div>
              <div>🚗 Garages & Automotive Businesses</div>
              <div>🌳 Landscaping Companies</div>
              <div>📦 Warehousing & Distribution</div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2 style={headingStyle}>How To Order Branded Workwear</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "25px",
                marginTop: "30px",
              }}
            >
              <div>
                <h3>1. Choose Your Workwear</h3>

                <p style={textStyle}>
                  Select the garments you need, such as t-shirts, polos,
                  hoodies, sweatshirts, jackets or hi-vis clothing.
                </p>
              </div>

              <div>
                <h3>2. Send Us Your Logo</h3>

                <p style={textStyle}>
                  Upload or send your company logo and let us know where you
                  would like it printed.
                </p>
              </div>

              <div>
                <h3>3. Approve & Print</h3>

                <p style={textStyle}>
                  Once the details are confirmed, your branded workwear can be
                  prepared and printed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2 style={headingStyle}>
              Branded Workwear Across Northampton & Northamptonshire
            </h2>

            <p style={textStyle}>
              We provide branded workwear printing for customers in Northampton,
              Kettering, Corby, Wellingborough, Rushden, Rothwell, Desborough,
              Burton Latimer and surrounding areas across Northamptonshire.
            </p>

            <p style={textStyle}>
              Whether you are starting a new business, refreshing your company
              uniforms or ordering additional clothing for a growing team,
              contact Kett Press Co for a personalised quote.
            </p>

            <iframe
              title="Branded Workwear Printing Northamptonshire Map"
              src="https://www.google.com/maps?q=Northampton%20Northamptonshire&output=embed"
              width="100%"
              height="400"
              style={{
                border: 0,
                borderRadius: "14px",
                marginTop: "25px",
              }}
              loading="lazy"
            />
          </div>
        </section>

<RelatedProducts
  categories={[
    "Jacket",
    "Gilet",
    "Soft Shell Jacket",
    "Trousers"
  ]}
  limit={4}
  title="Popular Branded Workwear"
/>

        {/* FAQ */}
        <section style={sectionStyle}>
          <div style={cardStyle}>
            <h2 style={headingStyle}>
              Frequently Asked Questions About Branded Workwear
            </h2>

            <div style={{ marginBottom: "28px" }}>
              <h3>Can I order branded workwear for a small team?</h3>

              <p style={textStyle}>
                Yes. We can help both small businesses and larger organisations
                with custom printed workwear.
              </p>
            </div>

            <div style={{ marginBottom: "28px" }}>
              <h3>Do you offer bulk discounts?</h3>

              <p style={textStyle}>
                Yes. Larger quantity orders may qualify for bulk pricing,
                depending on the garments and printing required.
              </p>
            </div>

            <div style={{ marginBottom: "28px" }}>
              <h3>Can you print my company logo?</h3>

              <p style={textStyle}>
                Yes. You can provide your company logo or artwork for printing
                on your chosen garments.
              </p>
            </div>

            <div style={{ marginBottom: "28px" }}>
              <h3>Do you provide workwear printing in Northampton?</h3>

              <p style={textStyle}>
                Yes. We serve customers in Northampton as well as Kettering,
                Corby, Wellingborough and other areas across Northamptonshire.
              </p>
            </div>

            <div>
              <h3>What types of workwear can you print?</h3>

              <p style={textStyle}>
                We can provide printing for garments including t-shirts, polo
                shirts, hoodies, sweatshirts, jackets and selected hi-vis
                clothing.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            background: "#111",
            color: "#fff",
            textAlign: "center",
            padding: "90px 20px",
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
                fontSize: "clamp(2rem,4vw,3rem)",
                marginBottom: "20px",
              }}
            >
              Need Branded Workwear For Your Team?
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#e5e5e5",
              }}
            >
              Get a free quote for custom printed workwear, polo shirts,
              t-shirts, hoodies, uniforms, jackets and hi-vis clothing. We help
              businesses across Northampton and Northamptonshire create
              professional branded clothing for their teams.
            </p>

            <div style={{ marginTop: "15px" }}>
              <a href="/contact" style={buttonStyle}>
                Get Your Free Quote
              </a>

              <a href="/shop" style={secondaryButtonStyle}>
                Browse Products
              </a>
            </div>

            <div
              style={{
                marginTop: "45px",
                lineHeight: "2",
              }}
            >
              <p>📍 Kettering, Northamptonshire</p>
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
}