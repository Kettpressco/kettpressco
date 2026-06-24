export default function WorkwearPrintingRugby() {
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
    background: "#d62828",
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
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/images/workwear.jpg') center/cover",
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
          Workwear Printing Rugby
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Professional workwear printing in Rugby for builders, electricians,
          plumbers, landscapers, cleaning companies, restaurants, schools and
          businesses. Branded clothing that helps your team look professional
          and promotes your business wherever you work.
        </p>

        <a href="/contact" style={buttonStyle}>
          Request a Free Quote
        </a>
      </section>

      <section style={sectionStyle}>
        {/* INTRO */}
        <div style={cardStyle}>
          <h2>Custom Printed Workwear in Rugby</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Kett Press Co provides professional workwear printing services for
            businesses throughout Rugby and the surrounding Warwickshire area.
            We help companies create a professional image through high-quality
            branded clothing that is comfortable, durable and built for daily
            use.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Whether you need a few branded polo shirts for a small team or a
            large order of workwear for multiple staff members, we can supply
            and print garments to suit your requirements.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Using professional DTF printing technology, we produce vibrant,
            long-lasting logos and designs that maintain their appearance even
            after repeated washing and regular use.
          </p>
        </div>

        {/* SERVICES */}
        <div style={cardStyle}>
          <h2>Workwear We Print</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div>
              <h3>Polo Shirts</h3>
              <p>
                Professional branded polo shirts suitable for offices,
                warehouses, retail and customer-facing teams.
              </p>
            </div>

            <div>
              <h3>Work Hoodies</h3>
              <p>
                Warm and durable hoodies ideal for outdoor workers and trade
                professionals.
              </p>
            </div>

            <div>
              <h3>Work T-Shirts</h3>
              <p>
                Cost-effective branded t-shirts for everyday business use.
              </p>
            </div>

            <div>
              <h3>Hi-Vis Clothing</h3>
              <p>
                Printed hi-vis garments for construction sites and industrial
                environments.
              </p>
            </div>

            <div>
              <h3>Sweatshirts</h3>
              <p>
                Comfortable work sweatshirts featuring your company logo.
              </p>
            </div>

            <div>
              <h3>Uniform Packages</h3>
              <p>
                Complete branded clothing packages for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div style={cardStyle}>
          <h2>Recent Workwear Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            <img
              src="/images/Polo.jpg"
              alt="Printed Workwear"
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />

            <img
              src="/images/PoloTshirt.jpg"
              alt="Custom Polo Shirts"
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />

            <img
              src="/images/workwear.jpg"
              alt="Branded Work Clothing"
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>

        {/* INDUSTRIES */}
        <div style={cardStyle}>
          <h2>Industries We Serve</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Construction Companies</li>
            <li>Electricians</li>
            <li>Plumbers</li>
            <li>Landscaping Businesses</li>
            <li>Cleaning Companies</li>
            <li>Restaurants & Cafes</li>
            <li>Schools & Colleges</li>
            <li>Retail Businesses</li>
            <li>Delivery Services</li>
            <li>Fitness & Gym Businesses</li>
          </ul>
        </div>

        {/* BENEFITS */}
        <div style={cardStyle}>
          <h2>Why Branded Workwear Matters</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Branded workwear helps create a professional appearance and builds
            trust with customers. Staff uniforms make it easy for customers to
            identify employees while also strengthening your company brand.
          </p>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Every time your team wears branded clothing, your business gains
            visibility. Workwear acts as a mobile advertisement while promoting
            consistency and professionalism across your workforce.
          </p>
        </div>

        {/* WHY CHOOSE */}
        <div style={cardStyle}>
          <h2>Why Choose Kett Press Co?</h2>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>High Quality DTF Printing</li>
            <li>Fast Turnaround Times</li>
            <li>Competitive Pricing</li>
            <li>Friendly Local Service</li>
            <li>Low Minimum Order Quantities</li>
            <li>Garment Supply Available</li>
            <li>Bulk Order Discounts</li>
          </ul>
        </div>

        {/* AREAS */}
        <div style={cardStyle}>
          <h2>Areas We Cover Around Rugby</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            We provide workwear printing throughout Rugby and nearby areas
            including:
          </p>

          <ul style={{ lineHeight: "2", color: "#444" }}>
            <li>Bilton</li>
            <li>Hillmorton</li>
            <li>Brownsover</li>
            <li>Dunchurch</li>
            <li>Long Lawford</li>
            <li>Cawston</li>
            <li>Clifton Upon Dunsmore</li>
            <li>Brinklow</li>
            <li>Newbold-on-Avon</li>
            <li>Overslade</li>
          </ul>
        </div>

        {/* FAQ */}
        <div style={cardStyle}>
          <h2>Frequently Asked Questions</h2>

          <h3>Can you supply the garments?</h3>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Yes. We can supply polo shirts, hoodies, t-shirts, sweatshirts and
            hi-vis clothing ready for printing.
          </p>

          <h3>Can I provide my own garments?</h3>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            In many cases yes. Contact us first so we can confirm suitability.
          </p>

          <h3>Do you offer bulk discounts?</h3>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Yes. Larger orders typically benefit from reduced per-item pricing.
          </p>

          <h3>How durable are the prints?</h3>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Our DTF prints are designed to withstand regular washing and daily
            wear while maintaining vibrant colours.
          </p>
        </div>

        {/* CONTACT */}
        <div style={cardStyle}>
          <h2>Get a Workwear Printing Quote</h2>

          <p style={{ lineHeight: "1.9", color: "#444" }}>
            Looking for professional branded workwear in Rugby? Contact Kett
            Press Co today for a free quotation.
          </p>

          <p>
            <strong>Phone:</strong> 07742514098
          </p>

          <p>
            <strong>Email:</strong> info@kettpressco.com
          </p>

          <p>
            <strong>Business:</strong> Kett Press Co
          </p>

          <a href="/contact" style={buttonStyle}>
            Get a Free Quote
          </a>
        </div>

        {/* MAP */}
        <div style={cardStyle}>
          <h2>Serving Rugby Businesses</h2>

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

        {/* INTERNAL LINKS */}
        <div style={cardStyle}>
          <h2>Related Services</h2>

          <ul style={{ lineHeight: "2" }}>
            <li>
              <a href="/tshirt-printing-rugby">
                T-Shirt Printing Rugby
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
              <a href="/branded-workwear-printing-northampton">
                Branded Workwear Northampton
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}