export default function CustomHoodiePrintingLeicester() {
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

  const buttonStyle = {
    display: "inline-block",
    background: "#000",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    marginTop: "15px",
  };

  const imageStyle = {
    width: "100%",
    height: "320px",
    objectFit: "cover",
    borderRadius: "12px",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* HERO */}
      <section
        style={{
          background: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Custom Hoodie Printing Leicester
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Premium custom hoodie printing in Leicester for businesses, schools,
          sports teams, churches, charities, events and individuals. Quality
          hoodies printed with vibrant, durable DTF transfers that are built to
          last.
        </p>

        <a href="/contact" style={buttonStyle}>
          Get a Free Quote
        </a>
      </section>

      <section style={sectionStyle}>
        {/* INTRO */}
        <div style={cardStyle}>
          <h2>Professional Hoodie Printing Leicester</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Looking for custom hoodie printing in Leicester? Kett Press Co
            supplies high-quality personalised hoodies for businesses,
            workwear, schools, colleges, sports clubs, churches, charities and
            special events.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Whether you need a single hoodie or a bulk order for your team,
            organisation or event, we provide professional printing with
            excellent durability and vibrant colours.
          </p>
        </div>

        {/* GALLERY */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <img
            src="/images/hoodie.jpg"
            alt="Custom Hoodie Printing Leicester"
            style={imageStyle}
          />

          <img
            src="/images/event2.jpg"
            alt="Printed Hoodies Leicester"
            style={imageStyle}
          />

          <img
            src="/images/event3.jpg"
            alt="Personalised Hoodies Leicester"
            style={imageStyle}
          />
        </div>

        {/* SERVICES */}
        <div style={cardStyle}>
          <h2>Our Hoodie Printing Services</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Business & Company Hoodies</li>
            <li>Branded Workwear Hoodies</li>
            <li>School & College Hoodies</li>
            <li>Leavers Hoodies</li>
            <li>Sports Team Hoodies</li>
            <li>Gym & Fitness Hoodies</li>
            <li>Church Group Hoodies</li>
            <li>Event & Festival Hoodies</li>
            <li>Charity & Volunteer Hoodies</li>
            <li>Personalised Family Hoodies</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Premium Quality Hoodies</li>
            <li>Durable DTF Printing Technology</li>
            <li>Full Colour Custom Designs</li>
            <li>Fast Turnaround Times</li>
            <li>Competitive Pricing</li>
            <li>Small & Large Orders Welcome</li>
            <li>Excellent Customer Service</li>
            <li>Professional Finish Every Time</li>
          </ul>
        </div>

        {/* DTF SECTION */}
        <div style={cardStyle}>
          <h2>Long-Lasting Hoodie Printing</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We use modern Direct-to-Film (DTF) printing technology which allows
            us to produce vibrant designs with excellent durability. Our prints
            remain bright and professional even after repeated washing when
            cared for correctly.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            DTF printing is ideal for logos, text, graphics and full-colour
            artwork, making it perfect for both business and personal hoodie
            orders.
          </p>
        </div>

        {/* AREAS */}
        <div style={cardStyle}>
          <h2>Areas We Cover In Leicester</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We provide hoodie printing services throughout Leicester including
            Leicester City Centre, Oadby, Wigston, Braunstone, Glenfield,
            Evington, Hamilton, Aylestone, Beaumont Leys, Thurmaston, Enderby,
            Birstall and nearby areas.
          </p>
        </div>

        {/* FAQ */}
        <div style={cardStyle}>
          <h2>Frequently Asked Questions</h2>

          <h3>Can I order just one hoodie?</h3>
          <p>
            Yes. We can print individual hoodies as well as large bulk orders.
          </p>

          <h3>Can you print my logo?</h3>
          <p>
            Absolutely. We can print company logos, school designs, team logos
            and custom artwork.
          </p>

          <h3>Do you offer bulk discounts?</h3>
          <p>
            Yes. We offer competitive pricing for larger hoodie orders.
          </p>

          <h3>Do you deliver to Leicester?</h3>
          <p>
            Yes. We provide delivery throughout Leicester and surrounding
            areas.
          </p>
        </div>

        {/* CTA */}
        <div style={cardStyle}>
          <h2>Request A Hoodie Printing Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Need custom hoodies for your business, school, sports team or
            event? Contact Kett Press Co today for a free quote.
          </p>

          <a href="/contact" style={buttonStyle}>
            Request Your Quote
          </a>
        </div>

        {/* CONTACT */}
        <div style={cardStyle}>
          <h2>Contact Kett Press Co</h2>

          <p>
            <strong>Email:</strong> info@kettpressco.com
          </p>

          <p>
            <strong>Phone:</strong> 07742 514098
          </p>

          <p>
            <strong>Location:</strong> Kettering, Northamptonshire
          </p>
        </div>

        {/* RELATED SERVICES */}
        <div style={cardStyle}>
          <h2>Related Services</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>
              <a href="/t-shirt-printing-leicester">
                T-Shirt Printing Leicester
              </a>
            </li>

            <li>
              <a href="/workwear-printing-leicester">
                Workwear Printing Leicester
              </a>
            </li>

            <li>
              <a href="/custom-hoodies-for-schools">
                Custom Hoodies For Schools
              </a>
            </li>

            <li>
              <a href="/contact">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>

        {/* MAP */}
        <div style={cardStyle}>
          <h2>Serving Leicester & Surrounding Areas</h2>

          <iframe
            title="Leicester Map"
            src="https://www.google.com/maps?q=Leicester&output=embed"
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}