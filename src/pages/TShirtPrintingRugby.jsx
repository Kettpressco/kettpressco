export default function TShirtPrintingRugby() {
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
    background: "#e63946",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/work1.jpg') center/cover",
          color: "#fff",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          T-Shirt Printing Rugby
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          Professional custom t-shirt printing in Rugby for businesses,
          schools, sports teams, charities, events and workwear. Fast
          turnaround, high-quality DTF printing and competitive pricing from
          Kett Press Co.
        </p>

        <a href="/contact" style={buttonStyle}>
          Get a Free Quote
        </a>
      </section>

      {/* INTRO */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Custom Clothing Printing in Rugby</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Looking for reliable t-shirt printing in Rugby? Kett Press Co
            supplies custom printed clothing for local businesses, schools,
            clubs, gyms and events throughout Rugby and the surrounding areas.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We use modern Direct-To-Film (DTF) printing technology to create
            vibrant, durable designs on t-shirts, hoodies, polo shirts,
            workwear and promotional clothing.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Whether you need a single custom t-shirt or a large bulk order for
            your organisation, we provide professional results with excellent
            customer service.
          </p>
        </div>

        {/* SERVICES */}
        <div style={cardStyle}>
          <h2>Our Printing Services</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Custom T-Shirt Printing</li>
            <li>Business Workwear Printing</li>
            <li>Printed Polo Shirts</li>
            <li>Branded Hoodies</li>
            <li>School Leavers Hoodies</li>
            <li>Gym & Fitness Clothing</li>
            <li>Charity Event Clothing</li>
            <li>Sports Team Apparel</li>
            <li>Hi-Vis Workwear Printing</li>
            <li>Small & Bulk Orders</li>
          </ul>
        </div>

        {/* GALLERY */}
        <div style={cardStyle}>
          <h2>Recent Clothing Printing Work</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <img
              src="/images/work1.jpg"
              alt="Printed T-Shirts"
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />

            <img
              src="/images/work2.jpg"
              alt="Printed Workwear"
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />

            <img
              src="/images/work3.jpg"
              alt="Custom Hoodies"
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>

        {/* WHY CHOOSE */}
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Professional DTF Printing Technology</li>
            <li>Bright, Durable Prints</li>
            <li>Fast Turnaround Times</li>
            <li>Competitive Pricing</li>
            <li>Friendly Personal Service</li>
            <li>No Large Minimum Order Requirements</li>
            <li>Perfect for Businesses & Events</li>
          </ul>
        </div>

        {/* AREAS */}
        <div style={cardStyle}>
          <h2>Areas We Cover Around Rugby</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We provide t-shirt printing and custom clothing services throughout
            Rugby and surrounding areas including:
          </p>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Bilton</li>
            <li>Hillmorton</li>
            <li>Brownsover</li>
            <li>Cawston</li>
            <li>Long Lawford</li>
            <li>Dunchurch</li>
            <li>Clifton Upon Dunsmore</li>
            <li>Newbold-on-Avon</li>
            <li>Overslade</li>
            <li>Brinklow</li>
          </ul>
        </div>

        {/* FAQ */}
        <div style={cardStyle}>
          <h2>Frequently Asked Questions</h2>

          <h3>What printing method do you use?</h3>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            We primarily use DTF printing, producing vibrant and durable prints
            suitable for most garments.
          </p>

          <h3>Can I order just one t-shirt?</h3>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Yes. We can produce single garments as well as larger bulk orders.
          </p>

          <h3>Do you supply garments?</h3>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Yes. We can supply t-shirts, hoodies, polo shirts, sweatshirts and
            workwear.
          </p>

          <h3>How long does printing take?</h3>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Most orders are completed within a few business days depending on
            quantity and garment availability.
          </p>
        </div>

        {/* CONTACT */}
        <div style={cardStyle}>
          <h2>Get a Quote for T-Shirt Printing in Rugby</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Need custom printed clothing for your business, school, event or
            organisation? Contact Kett Press Co today for a free quotation.
          </p>

          <p>
            <strong>Phone:</strong> 07742514098
          </p>

          <p>
            <strong>Email:</strong> info@kettpressco.com
          </p>

          <a href="/contact" style={buttonStyle}>
            Request a Quote
          </a>
        </div>

        {/* MAP */}
        <div style={cardStyle}>
          <h2>Serving Rugby & Surrounding Areas</h2>

          <iframe
            title="Rugby Map"
            src="https://www.google.com/maps?q=Rugby,Warwickshire&output=embed"
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            loading="lazy"
          ></iframe>
        </div>

        {/* RELATED PAGES */}
        <div style={cardStyle}>
          <h2>Related Services</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>
              <a href="/workwear-printing-kettering">
                Workwear Printing Kettering
              </a>
            </li>

            <li>
              <a href="/custom-hoodie-printing-leicester">
                Custom Hoodie Printing Leicester
              </a>
            </li>

            <li>
              <a href="/hi-vis-workwear-printing-kettering">
                Hi-Vis Workwear Printing
              </a>
            </li>

            <li>
              <a href="/tshirt-printing-kettering">
                T-Shirt Printing Kettering
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}