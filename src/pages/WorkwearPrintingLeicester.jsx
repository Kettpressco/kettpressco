export default function WorkwearPrintingLeicester() {
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
    height: "300px",
    objectFit: "cover",
    borderRadius: "12px",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* Hero */}
      <section
        style={{
          background: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Workwear Printing Leicester
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Professional workwear printing in Leicester for businesses,
          tradespeople, construction companies, restaurants, gyms, schools,
          charities and local organisations. High-quality branded clothing,
          printed polos, hoodies, t-shirts and uniforms with fast turnaround.
        </p>

        <a href="/contact" style={buttonStyle}>
          Get a Free Quote
        </a>
      </section>

      <section style={sectionStyle}>
        {/* Intro */}
        <div style={cardStyle}>
          <h2>Professional Branded Workwear Leicester</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            At Kett Press Co, we provide high-quality workwear printing for
            businesses throughout Leicester. Whether you're a sole trader,
            construction company, gym owner, restaurant, delivery service or
            growing business, we can help create professional branded clothing
            that promotes your company and builds trust with customers.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We use premium Direct-to-Film (DTF) printing technology to produce
            vibrant, durable prints suitable for everyday work environments.
            From single garments to bulk uniform orders, we deliver reliable
            printing with excellent attention to detail.
          </p>
        </div>

        {/* Images */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <img
            src="/images/work1.jpg"
            alt="Workwear Printing Leicester"
            style={imageStyle}
          />

          <img
            src="/images/work2.jpg"
            alt="Branded Workwear Leicester"
            style={imageStyle}
          />

          <img
            src="/images/work3.jpg"
            alt="Printed Workwear Leicester"
            style={imageStyle}
          />
        </div>

        {/* Services */}
        <div style={cardStyle}>
          <h2>Our Leicester Workwear Printing Services</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Printed Work T-Shirts</li>
            <li>Branded Polo Shirts</li>
            <li>Custom Hoodies</li>
            <li>Hi-Vis Workwear Printing</li>
            <li>Construction & Trade Workwear</li>
            <li>Hospitality Uniforms</li>
            <li>Gym & Fitness Staff Clothing</li>
            <li>Corporate Workwear</li>
            <li>School Staff Uniforms</li>
            <li>Charity & Volunteer Clothing</li>
          </ul>
        </div>

        {/* Why Choose */}
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Premium DTF Printing Technology</li>
            <li>Long-Lasting Wash Durable Prints</li>
            <li>Fast Turnaround Times</li>
            <li>Competitive Pricing</li>
            <li>Small & Bulk Orders Welcome</li>
            <li>Professional Customer Service</li>
            <li>Vibrant Full Colour Printing</li>
            <li>Reliable UK-Based Business</li>
          </ul>
        </div>

        {/* Industries */}
        <div style={cardStyle}>
          <h2>Workwear For Every Industry</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We print workwear for builders, electricians, plumbers, landscapers,
            decorators, cleaning companies, restaurants, cafés, gyms, schools,
            churches, sports clubs, charities and businesses throughout
            Leicester.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Professional branded clothing helps your team look consistent,
            improves brand visibility and creates a positive impression with
            customers.
          </p>
        </div>

        {/* Areas */}
        <div style={cardStyle}>
          <h2>Areas We Cover In Leicester</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We provide workwear printing across Leicester including Leicester
            City Centre, Oadby, Wigston, Braunstone, Glenfield, Hamilton,
            Evington, Aylestone, Beaumont Leys, Thurmaston, Enderby, Birstall
            and surrounding areas.
          </p>
        </div>

        {/* FAQ */}
        <div style={cardStyle}>
          <h2>Frequently Asked Questions</h2>

          <h3>Can you print my company logo?</h3>
          <p>
            Yes. We can print logos, business names, contact details and custom
            artwork on a wide range of garments.
          </p>

          <h3>Do you accept small orders?</h3>
          <p>
            Absolutely. We can print single garments as well as large company
            uniform orders.
          </p>

          <h3>How durable is DTF workwear printing?</h3>
          <p>
            Our DTF prints are designed to withstand regular washing and daily
            use while maintaining excellent colour and detail.
          </p>

          <h3>Do you deliver to Leicester?</h3>
          <p>
            Yes. We supply and deliver printed workwear throughout Leicester and
            surrounding areas.
          </p>
        </div>

        {/* CTA */}
        <div style={cardStyle}>
          <h2>Get A Workwear Printing Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Looking for reliable workwear printing in Leicester? Contact Kett
            Press Co today for a free quote on branded polos, hoodies, t-shirts,
            uniforms and hi-vis workwear.
          </p>

          <a href="/contact" style={buttonStyle}>
            Request Your Quote
          </a>
        </div>

        {/* Contact */}
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

        {/* Internal Links */}
        <div style={cardStyle}>
          <h2>Related Services</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>
              <a href="/t-shirt-printing-leicester">
                T-Shirt Printing Leicester
              </a>
            </li>

            <li>
              <a href="/branded-workwear-printing">
                Branded Workwear Printing
              </a>
            </li>

            <li>
              <a href="/hi-vis-workwear-printing-kettering">
                Hi-Vis Workwear Printing
              </a>
            </li>

            <li>
              <a href="/contact">Get a Quote</a>
            </li>
          </ul>
        </div>

        {/* Map */}
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