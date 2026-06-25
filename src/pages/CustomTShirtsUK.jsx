export default function CustomTShirtsUK() {
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
      {/* HERO SECTION */}
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
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Custom T Shirts UK
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Looking for custom t shirts in the UK? Kett Press Co provides
            high-quality custom made t shirts, customised shirts, branded
            clothing and personalised apparel with nationwide UK delivery.
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
            Request a Quote
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Custom Made T Shirts UK</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co specialises in custom made t shirts for customers
            throughout the United Kingdom. Whether you need a single personalised
            shirt or hundreds of branded garments for your business, we deliver
            professional quality printing using modern Direct To Film (DTF)
            technology.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Our custom t shirts are ideal for businesses, events, sports clubs,
            schools, churches, charities and individuals looking for reliable
            garment printing. We offer vibrant full-colour prints, excellent
            durability and fast turnaround times.
          </p>
        </div>

        <img
          src="/images/tshirt4.jpg"
          alt="Custom T Shirts UK"
          style={imageStyle}
        />
      </section>

      {/* WHY CHOOSE */}
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
            Why Choose Kett Press Co?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            <div style={cardStyle}>
              <h3>No Minimum Orders</h3>
              <p>
                Order a single custom t shirt or large quantities for teams,
                organisations and businesses.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Premium DTF Printing</h3>
              <p>
                Vibrant colours, sharp details and long-lasting prints on a wide
                variety of garments.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Nationwide Delivery</h3>
              <p>
                We serve customers across England, Scotland, Wales and Northern
                Ireland.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Fast Turnaround</h3>
              <p>
                Professional production and delivery to keep your project moving
                on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMISED SHIRTS */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Customised Shirts UK For Every Occasion</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Our customised shirts are suitable for a wide range of applications.
            We help businesses promote their brand, support local organisations,
            and create personalised garments for special events.
          </p>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
            }}
          >
            <li>Business uniforms</li>
            <li>Trade workwear</li>
            <li>Promotional clothing</li>
            <li>School leavers shirts</li>
            <li>Church events</li>
            <li>Sports clubs</li>
            <li>Charity fundraisers</li>
            <li>Birthday celebrations</li>
            <li>Family reunions</li>
            <li>Corporate events</li>
          </ul>
        </div>

        <img
          src="/images/tshirt2.jpg"
          alt="Customised Shirts UK"
          style={imageStyle}
        />
      </section>

      {/* BUSINESS SECTION */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <div style={cardStyle}>
            <h2>Custom T Shirts For Businesses</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Branded clothing helps businesses create a professional appearance
              while increasing brand visibility. We print company logos,
              promotional graphics and staff uniforms on quality garments that
              are built for daily wear.
            </p>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              From small local businesses to growing organisations, our custom
              t-shirt printing service provides a cost-effective way to create a
              consistent and professional image.
            </p>
          </div>
        </div>
      </section>

      {/* DTF SECTION */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Professional DTF Printed T Shirts</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We use DTF printing because it offers outstanding versatility and
            durability. Unlike some traditional printing methods, DTF allows
            highly detailed designs and vibrant colours on both light and dark
            garments.
          </p>

          <ul
            style={{
              lineHeight: "2",
              color: "#444",
            }}
          >
            <li>Full colour printing</li>
            <li>Excellent wash resistance</li>
            <li>Soft feel on garments</li>
            <li>Suitable for cotton and polyester</li>
            <li>Perfect for logos and graphics</li>
            <li>Great for short runs and bulk orders</li>
          </ul>
        </div>

        <img
          src="/images/Tshirt10.jpg"
          alt="DTF Printed T Shirts"
          style={imageStyle}
        />
      </section>

      {/* UK DELIVERY */}
      <section
        style={{
          background: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={sectionStyle}>
          <div style={cardStyle}>
            <h2>UK-Wide Delivery</h2>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              Based in Kettering, Northamptonshire, Kett Press Co supplies
              custom t shirts to customers throughout the UK.
            </p>

            <p style={{ lineHeight: "1.9", color: "#444" }}>
              We regularly serve customers in London, Birmingham, Manchester,
              Liverpool, Leeds, Leicester, Nottingham, Northampton, Coventry,
              Bristol and many other locations across the country.
            </p>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Explore Our Printing Services</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Looking for more clothing printing options?
          </p>

          <ul style={{ lineHeight: "2" }}>
            <li>
              <a href="/t-shirt-printing-uk">
                T Shirt Printing UK
              </a>
            </li>

            <li>
              <a href="/workwear-printing-kettering">
                Workwear Printing
              </a>
            </li>

            <li>
              <a href="/dtf-vs-vinyl-printing">
                DTF Printing Information
              </a>
            </li>

            <li>
              <a href="/contact">
                Request a Quote
              </a>
            </li>
          </ul>
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
            <h3>Do you have a minimum order quantity?</h3>
            <p>
              No. We can print individual garments as well as large bulk orders.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Can I supply my own design?</h3>
            <p>
              Yes. We accept customer artwork and logos for custom t-shirt
              printing.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Do you deliver across the UK?</h3>
            <p>
              Yes. We offer nationwide delivery throughout the United Kingdom.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>What garments can be printed?</h3>
            <p>
              T-shirts, hoodies, sweatshirts, polos, workwear and many other
              clothing items.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={sectionStyle}>
        <div
          style={{
            ...cardStyle,
            textAlign: "center",
          }}
        >
          <h2>Get Your Custom T Shirts Today</h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#444",
            }}
          >
            Contact Kett Press Co for personalised quotes on custom t shirts,
            branded clothing, event merchandise and professional garment
            printing services.
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
            Get a Quote
          </a>
        </div>
      </section>
    </>
  );
}