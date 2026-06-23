export default function TShirtPrintingLeicester() {
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
    marginTop: "20px",
    fontWeight: "600",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
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
          T-Shirt Printing Leicester
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          Professional T-shirt printing in Leicester for businesses, events,
          sports teams, schools, charities and individuals. High-quality DTF
          printing with fast turnaround and competitive prices.
        </p>

        <a href="/contact" style={buttonStyle}>
          Get a Free Quote
        </a>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Custom T-Shirt Printing Leicester</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co provides professional T-shirt printing services for
            customers across Leicester and surrounding areas. Whether you need a
            single custom T-shirt, branded workwear, event merchandise or bulk
            clothing orders, we deliver vibrant, durable prints using premium
            Direct-to-Film (DTF) printing technology.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We work with local businesses, schools, churches, gyms, sports
            clubs, charities and event organisers throughout Leicester,
            providing custom printed clothing that looks professional and lasts.
          </p>
        </div>

        {/* IMAGES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <img
            src="/images/tshirt11.jpg"
            alt="Custom T-Shirt Printing Leicester"
            style={imageStyle}
          />

          <img
            src="/images/tshirt12.jpg"
            alt="Printed Workwear Leicester"
            style={imageStyle}
          />

          <img
            src="/images/tshirt13.jpg"
            alt="DTF Printing Leicester"
            style={imageStyle}
          />
        </div>

        {/* SERVICES */}
        <div style={cardStyle}>
          <h2>T-Shirt Printing Services in Leicester</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Business & Company T-Shirts</li>
            <li>Workwear Printing</li>
            <li>Custom Event T-Shirts</li>
            <li>Sports Team Clothing</li>
            <li>Gym Wear Printing</li>
            <li>School & College Clothing</li>
            <li>Church & Community Group Apparel</li>
            <li>Promotional Merchandise</li>
            <li>Birthday & Family Event T-Shirts</li>
            <li>Bulk Clothing Orders</li>
          </ul>
        </div>

        {/* WHY CHOOSE */}
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Premium DTF Printing Technology</li>
            <li>Vibrant Full Colour Prints</li>
            <li>Long Lasting Wash Durability</li>
            <li>Fast Turnaround Times</li>
            <li>Small & Large Quantity Orders</li>
            <li>Competitive Pricing</li>
            <li>Friendly Customer Support</li>
            <li>Local UK Business</li>
          </ul>
        </div>

        {/* AREAS */}
        <div style={cardStyle}>
          <h2>Areas We Cover Around Leicester</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We provide T-shirt printing services throughout Leicester including
            Leicester City Centre, Oadby, Wigston, Evington, Aylestone,
            Braunstone, Glenfield, Hamilton, Beaumont Leys, Thurmaston,
            Birstall, Enderby and surrounding areas.
          </p>
        </div>

        {/* FAQ */}
        <div style={cardStyle}>
          <h2>Frequently Asked Questions</h2>

          <h3>Do you offer single T-shirt printing?</h3>
          <p>
            Yes. We can print individual garments as well as bulk orders.
          </p>

          <h3>How durable are your prints?</h3>
          <p>
            Our DTF prints are highly durable and designed to withstand regular
            washing when cared for correctly.
          </p>

          <h3>Can I supply my own design?</h3>
          <p>
            Absolutely. We can print your logo, artwork, event design or custom
            graphics.
          </p>

          <h3>Do you deliver to Leicester?</h3>
          <p>
            Yes. We provide delivery throughout Leicester and surrounding areas.
          </p>
        </div>

        {/* CTA */}
        <div style={cardStyle}>
          <h2>Get a Quote for T-Shirt Printing Leicester</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Looking for reliable T-shirt printing in Leicester? Contact Kett
            Press Co today for a free no-obligation quote.
          </p>

          <a href="/contact" style={buttonStyle}>
            Request a Quote
          </a>
        </div>

        {/* CONTACT */}
        <div style={cardStyle}>
          <h2>Contact Kett Press Co</h2>

          <p>
            <strong>Email:</strong> info@kettpressco.com
          </p>

          <p>
            <strong>Phone:</strong> 07442 514098
          </p>

          <p>
            <strong>Location:</strong> Kettering, Northamptonshire
          </p>
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
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}